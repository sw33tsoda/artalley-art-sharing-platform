import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import _, { isEqual,isNull } from 'lodash';
import DragScroll from 'react-indiana-drag-scroll';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { FastField, Formik } from 'formik';
import InputField from '../../../CustomFields/InputField';
import TextareaField from '../../../CustomFields/TextareaField';
import SelectField from '../../../CustomFields/SelectField';
import { EditShowcaseValidation } from '../../../Validations';
import { setAnnouncementMessage } from '../../../../store/community/announcer';
function Showcase() {
    // Global state
    const user = useSelector(state => state.auth.authenticatedUser);

    // etc...
    const history = useHistory();
    const { id } = useParams();
    const editFormRef = useRef();
    const dispatch = useDispatch();
    
    // Local state
    // Chứa quày (showcase)
    const [showcase,setShowcase] = useState({});

    // Tác giả
    const [artist,setArtist] = useState({});

    // Check nếu thông tin tác phẩm khác nhau
    const [isDiff,setIsDiff] = useState(false);

    // Danh sách xóa
    const [removalList,setRemovalList] = useState([]);

    // Toggle sửa quày
    const [editMode,setEditMode] = useState(false);

    // Refresh lại useEffect
    const [refresh,setRefresh] = useState(false);

    // Check nếu đang submit
    const [isSubmitting,setIsSubmitting] = useState(false);

    // Danh sách các mục chọn (Select list)
    const [optionsList,setOptionsList] = useState({
        artChannels:[],
        privacies:[],
    });

    // Delete event
    let deleteShowcase = null;

    useEffect(() => {
        const getSpecificShowcase = async () => {
            await Axios.get(`/public/api/community/resources/showcases/get/${id}`).then(response => {
                console.log(response.data);
                const {data:{showcase,channelSelectList,privacySelectList}} = response;

                setShowcase({
                    ...showcase,
                    title:showcase.title,
                    subheading: isNull(showcase.subheading) ? '' : showcase.subheading,
                    description: isNull(showcase.description) ? '' : showcase.description,
                    channel: showcase.art_channel_id.toString(),
                    privacy: showcase.privacy_id.toString(),
                });
 
                setOptionsList({
                    artChannels:channelSelectList.map((option) => ({
                        value:option.id,
                        label:option.channel_name,
                    })),
                    privacies:privacySelectList.map((option) => ({
                        value:option.id,
                        label:option.allowed,
                    })),
                });
                setArtist({...showcase.users});
            }).catch(error => {
                // const {data:{message}} = error.response;
                console.log(error.response);
            })
        };
        getSpecificShowcase();
    },[refresh]);

    const handleAddItemToRemovalList = (id) => {
        let newList = removalList;
        if (newList.includes(id)) {
            newList = newList.filter(item_id => item_id !== id);
        } else {
            newList.push(id);
        }
        setRemovalList([...newList]);   
    }

    const handleEditSubmit = async (values) => {
        setIsSubmitting(true);
        const data = new FormData;
        const fillable = ['title','subheading','channel','privacy','description'];
        for (const key in values) {
            if (fillable.includes(key))
            data.append(key,values[key]);
        }
        data.append('removal_list',removalList);
        // data.append('_method','PATCH');
        const apiToken = localStorage.getItem('authenticatedUserToken');
        await Axios.post(`/public/api/community/resources/showcases/edit/${values.id}?api_token=${apiToken}`,data).then(response => {
            console.log(response);
            const {data:{message,redirect}} = response;
            dispatch(setAnnouncementMessage({
                message:message,
                type:'success',
            }));
            if (redirect) {
                history.push('/public/community/management');
            }
            setRefresh(!refresh);
            setEditMode(false);
            setRemovalList([]);
        }).catch(error => {
            const {data:{message}} = error.response;
            dispatch(setAnnouncementMessage({
                message:message,
                type:'danger',
            }));
        }).then(() => {
            setIsSubmitting(false);
        });
    }

    const handleDelete = () => {
        deleteShowcase = setTimeout(async () => {
            setIsSubmitting(true);
            const apiToken = localStorage.getItem('authenticatedUserToken');
            await Axios.get(`/public/api/community/resources/showcases/delete/${showcase.id}?api_token=${apiToken}`).then(response => {
                const {data:{message}} = response;
                dispatch(setAnnouncementMessage({
                    message:message,
                    type:'success',
                }));
                history.push('/public/community/management');
            }).catch(error => {
                const {data:{message}} = error.response;
                dispatch(setAnnouncementMessage({
                    message:message,
                    type:'danger',
                }));
            }).then(() => {
                setIsSubmitting(false);
            });
        },3000)
    }

    const handleCancelDelete = () => {
        setIsSubmitting(false);
        clearTimeout(deleteShowcase);
    }

    return (
        <div className="showcase">
            <div className="background"></div>
            <div className="header">
                <div className="info">
                    <div className="title">
                        <h1>{showcase.title}</h1>
                    </div>
                    <div className="subheading">
                        <h2>{showcase.subheading}</h2>
                    </div>
                </div>
            </div>
            <DragScroll className="arts-wrapper">
                <div className="arts-list">
                    {!_.isEmpty(showcase.showcase_arts) && showcase.showcase_arts.map(({arts:art,id:showcase_id},index) => (
                        <div className="wrapper" key={index}>
                            <div className="art">
                                <div className={classnames("overlay",{will_be_removed: removalList.includes(art.id)})}>
                                    <div className="title">
                                        <h2>{art.title}</h2>
                                    </div>
                                    <div className="caption">
                                        <p>{art.caption}</p>
                                    </div>
                                    <div className="description">
                                        <p>{art.description}</p>
                                    </div>
                                </div>
                                <img src={`/storage/app/public/community/1/arts/${art.art}`}/>

                                <div className="genres">
                                    <div className="dimensional">
                                        <h1>{art.dimensions && art.dimensions.dimensional}</h1>
                                    </div>
                                    <div className="channel">
                                        <h1>{art.art_channels && art.art_channels.channel_name}</h1>
                                    </div>
                                </div>
                                <div className="view-more">
                                    {editMode ? (
                                        <a className="delete-btn" onClick={() => handleAddItemToRemovalList(showcase_id)}>{removalList.includes(showcase_id) ? "BỎ GỠ" : "GỠ"}</a>
                                    ) : (
                                        <Link to={`/public/community/art/${art.id}`}>XEM THÊM</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </DragScroll>
            <div className="footer">
                <div className="description">
                    <p>{showcase.description}</p>
                </div>
                
                <div className="more">
                    <div className="artist">
                        <p className="title">TÁC GIẢ</p>
                        <div className="info">
                            <Link to={`/public/community/user/${artist.id}/arts`}>
                                <div className="profile-picture">
                                    {(artist && artist.profile_picture !== null) ? <img src={`/storage/app/public/profilePictures/${artist.profile_picture}`} /> : <i className="fas fa-user"></i>}
                                </div>
                            </Link>
                            <div className="name">
                                <Link to={`/public/community/user/${artist.id}/arts`}>
                                    <p className="username">{artist && artist.username}</p>
                                </Link>
                                <p className="fullname">{artist && artist.firstname + ' ' + artist.lastname}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {(editMode && user.id == showcase.user_id) && (
                    <div className="edit-form" style={{display:isSubmitting && 'none'}}>
                        {/* <div className="dash" style={{backgroundImage:`url(/storage/app/public/web/body/communityGallery/warning-dashline.png)`}}></div> */}
                        <Formik initialValues={showcase} validationSchema={EditShowcaseValidation} onSubmit={handleEditSubmit} innerRef={editFormRef}>
                            {({values,handleSubmit}) => {
                                // console.log(values,showcase);
                                if (!isEqual(values,showcase) || removalList.length > 0) {
                                    setTimeout(() => setIsDiff(true), 0);
                                } else {
                                    setTimeout(() => setIsDiff(false), 0);
                                }
                                return (
                                    <form className="form" onSubmit={handleSubmit}>
                                        <div className="split">
                                            <FastField
                                                name="title"
                                                component={InputField}

                                                label="Tiêu đề"
                                                labelClassName="label"
                                                className="text-input"
                                                disabled={false}
                                                placeholder="Tiêu đề" 
                                                // formErrorClass="form-error textarea-error"
                                            />
                                            <FastField
                                                name="subheading"
                                                component={InputField}

                                                label="Tiêu đề phụ"
                                                labelClassName="label"
                                                className="text-input"
                                                disabled={false}
                                                placeholder="Tiêu đề phụ"
                                                // formErrorClass="form-error textarea-error"
                                            />
                                        </div>
                                        <FastField
                                            name='description'
                                            component={TextareaField}

                                            label="Mô tả"
                                            labelClassName="label"
                                            className="text-input"
                                            disabled={false}
                                            placeholder="Nhập mô tả (không bắt buộc)"
                                            // formErrorClass="form-error textarea-error"
                                        />

                                        <div className="split">
                                            {optionsList.privacies.length > 0 && <FastField
                                                name='privacy'
                                                component={SelectField}

                                                label="Ai có thể xem"
                                                labelClassName="label"
                                                className="text-input"
                                                disabled={false}
                                                options={optionsList.privacies}
                                                // placeholder="Nhập mô tả (không bắt buộc)"
                                                // formErrorClass="form-error textarea-error"
                                            />}

                                            {optionsList.artChannels.length > 0 && <FastField
                                                name='channel'
                                                component={SelectField}

                                                label="Kênh ảnh"
                                                labelClassName="label"
                                                className="text-input"
                                                disabled={false}
                                                options={optionsList.artChannels}
                                                // placeholder="Nhập mô tả (không bắt buộc)"
                                                // formErrorClass="form-error textarea-error"
                                            />}
                                        </div>
                                    </form>
                                );
                            }}
                        </Formik>
                        
                    </div>
                )}

                {user.id == showcase.user_id && (
                    <div className="action-wrapper">
                        {!isSubmitting ? (
                            <React.Fragment>
                                {isDiff && editMode && (
                                    <button type="submit" onClick={() => {
                                        editFormRef.current.handleSubmit();
                                    }}>
                                        <div className="action">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </button>
                                )}
                                <div className="action" onClick={() => setEditMode(!editMode)}>
                                    {editMode ? <i className="fas fa-times"></i> : <i className="fas fa-edit"></i>}
                                </div>
                                {(removalList.length > 0 && editMode) && (
                                    <div className="removal-items-count">
                                        {/* <a className="remove-btn">GỠ</a> */}
                                        <p className="count">{removalList.length} <i className="fas fa-trash"></i></p>
                                    </div>
                                )}
                                <div className="action" onMouseDown={handleDelete} onMouseUp={handleCancelDelete} onMouseLeave={handleCancelDelete}>
                                    <i className="fas fa-trash"></i>
                                </div>
                            </React.Fragment>
                        ) : (
                            <img className="loading" src="https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"/>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Showcase;