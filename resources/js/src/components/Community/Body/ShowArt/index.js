import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams,Link, useHistory } from 'react-router-dom';
import _, { fill, isEmpty, isEqual, isNull, set, values } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { FastField, Formik } from 'formik';
import SelectField from '../../../CustomFields/SelectField';
import InputField from '../../../CustomFields/InputField';
import TextareaField from '../../../CustomFields/TextareaField';
import { EditArtValidation } from '../../../Validations';
import { setAnnouncementMessage } from '../../../../store/community/announcer';
import DragScroll from 'react-indiana-drag-scroll';
import Moment from 'react-moment';
import CommentSection from '../CommentSection';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ShowArt() {
    // Lấy thông tin người dùng từ Global State.
    const user = useSelector(state => state.auth.authenticatedUser);

    // etc...
    const history = useHistory();
    const { id } = useParams();
    const editFormRef = useRef();
    const dispatch = useDispatch();

    
    // Local states.

    // Toggle mở rộng quày liên quan
    const [fullShowcasesListToggle,setFullShowcasesListToggle] = useState(false);
    // Toggle sửa tác phẩm
    const [editMode,setEditMode] = useState(false);

    // Check nếu thông tin tác phẩm khác nhau
    const [isDiff,setIsDiff] = useState(false);

    // Chứa tác phẩm
    const [art,setArt] = useState({});

    // Refresh lại useEffect
    const [refresh,setRefresh] = useState(false);

    // Check nếu đang submit
    const [isSubmitting,setIsSubmitting] = useState(false);

    // Danh sách các mục chọn (Select list)
    const [optionsList,setOptionsList] = useState({
        artChannels:[],
        dimensions:[],
        privacies:[],
    });

    // Delete Event
    let deleleArt = null;
    
    // Thẻ
    const [tags,setTags] = useState([]);

    // Debounce nhập Tag
    const tagsDebounce = {
        callback: (value) => {
            const tagsList = value.split(',').filter(tag => tag !== '');
            setTags(tagsList);
        },
        ms:250,
    }

    useEffect(() => {
        const getArt = async () => {
            await Axios.get(`/public/api/community/resources/public/get-art-by-id/${id}`).then(response => {
                // console.log(response.data.art);
                const {data:{
                    art,
                    channelSelectList,
                    privacySelectList,
                    dimensionSelectList,
                }} = response;

                if (art.tags == null) {
                    art.tags = [];
                } else {
                    art.tags = art.tags.split(',');
                    setTags(art.tags);
                }

                setArt({
                    ...art,
                    title:art.title,
                    caption: isNull(art.caption) ? '' : art.caption,
                    description: isNull(art.description) ? '' : art.description,
                    tags: isNull(art.tags) ? '' : art.tags,
                    dimensional: art.dimension_id.toString(),
                    channel: art.art_channel_id.toString(),
                    privacy: art.privacy_id.toString(),
                    tags:art.tags.join(','),
                });

                setOptionsList({
                    artChannels:channelSelectList.map((option) => ({
                        value:option.id,
                        label:option.channel_name,
                    })),
                    dimensions:dimensionSelectList.map((option) => ({
                        value:option.id,
                        label:option.dimensional,
                    })),
                    privacies:privacySelectList.map((option) => ({
                        value:option.id,
                        label:option.allowed,
                    })),
                });
            }).catch(error => {
                console.log(error.response);
            })
        }
        getArt();
    },[refresh,id]);

    const handleEditSubmit = async (values) => {
        setIsSubmitting(true);
            const data = new FormData;
            const fillable = ['title','caption','channel','dimensional','privacy','description','tags'];
            for (const key in values) {
                if (fillable.includes(key))
                data.append(key,values[key]);
            }
            // data.append('_method','PATCH');
            const apiToken = localStorage.getItem('authenticatedUserToken');
            await Axios.post(`/public/api/community/resources/arts/edit/${values.id}?api_token=${apiToken}`,data).then(response => {
                const {data:{message}} = response;
                dispatch(setAnnouncementMessage({
                    message:message,
                    type:'success',
                }));
                setRefresh(!refresh);
                setEditMode(false);
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
        deleleArt = setTimeout(async () => {
            setIsSubmitting(true);
            const apiToken = localStorage.getItem('authenticatedUserToken');
            await Axios.get(`/public/api/community/resources/arts/delete/${art.id}?api_token=${apiToken}`).then(response => {
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
        clearTimeout(deleleArt);
    }

    // console.log(user.id,art.user_id)
    
    return (
        <div className="show-art">
            <div className="header">
                <div className="title">
                    <h1>{art.title}</h1>
                </div>
                <div className="genres">
                    <div className="dimensional">
                        <h1>{art.dimensions && art.dimensions.dimensional}</h1>
                    </div>
                    <div className="channel">
                        <h1>{art.art_channels && art.art_channels.channel_name}</h1>
                    </div>
                </div>
            </div>
            
            <div className="art-wrapper">
                <div className="art">
                    {/* <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} /> */}
                    <LazyLoadImage
                        src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`}
                        effect="blur"
                    />
                </div>

                <div className="caption">
                    <p>{art.caption}</p>
                </div>
            </div>

            <div className="footer">
                <div className="description">
                    <p>{art.description}</p>
                </div>

                {!_.isEmpty(art) && <div className="more" style={{justifyContent: art.tags.length > 0 && art.showcase_arts.length > 0 ? 'space-between' : 'space-evenly'}}>
                    <div className="artist">
                        <p className="title">TÁC GIẢ</p>
                        <div className="info">
                            <Link to={`/public/community/user/${art.user_id}/arts`}>
                                <div className="profile-picture">
                                    {(art.users && art.users.profile_picture !== null) ? <img src={`/storage/app/public/profilePictures/${art.users.profile_picture}`} /> : <i className="fas fa-user"></i>}
                                </div>
                            </Link>
                            <div className="name">
                                <Link to={`/public/community/user/${art.user_id}/arts`}>
                                    <p className="username">{art.users && art.users.username}</p>
                                </Link>
                                <p className="fullname">{art.users && art.users.firstname + ' ' + art.users.lastname}</p>
                            </div>
                        </div>
                    </div>
                        {!_.isEmpty(art.showcase_arts) && (
                            <div className="showcases-list">
                                <p className="title">THUỘC</p>
                                <div className="list">
                                    {art.showcase_arts.slice(0,3).map((showcase_art,index) => {
                                        return (
                                            <Link to={`/public/community/showcase/${showcase_art.showcase_id}`} key={index}>
                                                <div className="showcase">
                                                    <div className="showcase-thumbnail">
                                                        <img src={`/storage/app/public/community/${showcase_art.user_id}/arts/${showcase_art.arts.art}`}/>
                                                    </div>
                                                    {/* <div className="showcase-title">
                                                        <p>
                                                            {showcase_art.showcases.title}
                                                        </p>
                                                    </div> */}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                    {art.total_showcases > 3 && (
                                        <div className="showcase" onClick={() => setFullShowcasesListToggle(!fullShowcasesListToggle)}>
                                            <div className="showcase-thumbnail has-more">
                                                <p>
                                                    <i className="fas fa-grip-horizontal"></i> {art.total_showcases - 3}+ 
                                                </p>
                                            </div>
                                            <div className="showcase-title">
                                                
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        {art.tags.length > 0 && (
                            <div className="tags">
                                <p className="title">THẺ</p>
                                {art.tags.split(',').map((tag,index) => (
                                    <Link to="" key={index}>{tag}</Link>
                                ))}
                            </div>
                        )}
                </div>}

                {fullShowcasesListToggle && (
                    <DragScroll className="full-showcases-list">
                        {art.showcase_arts.map(({showcases:showcase},index) => (
                            <div key={index}>
                                <Link to={`/public/community/showcase/${showcase.id}`}>
                                    <p className="title">{showcase.title}</p>
                                </Link>
                                <div className="list">
                                    {showcase.showcase_arts.slice(0,3).map(({arts:art},index) => {
                                        return (
                                            <Link to={`/public/community/art/${art.id}`} key={index}>
                                                <div className="showcase">
                                                    <div className="showcase-thumbnail">
                                                        <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`}/>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                    {showcase.showcase_arts.length > 3 && (
                                        <Link to={`/public/community/showcase/${showcase.id}`}>
                                            <div className="showcase">
                                                <div className="showcase-thumbnail has-more">
                                                    <p>
                                                        <i className="fas fa-image"></i> {showcase.showcase_arts.length - 3}+ 
                                                    </p>
                                                </div>
                                                <div className="showcase-title">
                                                    
                                                </div>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </DragScroll>
                )}

                {(editMode && user.id == art.user_id) && (
                    <div className="edit-form" style={{display:isSubmitting && 'none'}}>
                        {/* <div className="dash" style={{backgroundImage:`url(/storage/app/public/web/body/communityGallery/warning-dashline.png)`}}></div> */}
                        <Formik initialValues={art} validationSchema={EditArtValidation} onSubmit={handleEditSubmit} innerRef={editFormRef}>
                            {({values,handleSubmit}) => {
                                // console.log(values,art);
                                if (!isEqual(values,art)) {
                                    setIsDiff(true);
                                } else {
                                    setIsDiff(false);
                                }
                                return (
                                    <form className="form" onSubmit={handleSubmit}>
                                        <div className="split">
                                            <div className="title">
                                                <FastField
                                                    name='title'
                                                    component={InputField}

                                                    label="Tiêu đề"
                                                    labelClassName="label"
                                                    className="text-input"
                                                    disabled={false}
                                                    placeholder="Nhập tiêu đề"
                                                    formErrorClass="form-error textarea-error"
                                                />
                                            </div>
                                            <div className="caption">
                                                <FastField
                                                    name='caption'
                                                    component={InputField}

                                                    label="Chú thích"
                                                    labelClassName="label"
                                                    className="text-input"
                                                    disabled={false}
                                                    placeholder="Nhập chú thích"
                                                    formErrorClass="form-error textarea-error"
                                                />
                                            </div>
                                        </div>
                                        <div className='split'>
                                            <div className="description">
                                                <FastField
                                                    name='description'
                                                    component={TextareaField}

                                                    label="Mô tả"
                                                    labelClassName="label"
                                                    className="text-input"
                                                    disabled={false}
                                                    placeholder="Nhập mô tả (không bắt buộc)"
                                                    formErrorClass="form-error textarea-error"
                                                />
                                            </div>
                                            <div className="privacy-and-dimensional">
                                                {optionsList.dimensions.length > 0 && <FastField
                                                    name='dimensional'
                                                    component={SelectField}

                                                    label="Không gian"
                                                    labelClassName="label"
                                                    className="text-input"
                                                    disabled={false}
                                                    options={optionsList.dimensions}
                                                />}

                                                {optionsList.artChannels.length > 0 && <FastField
                                                    name="channel"
                                                    component={SelectField}

                                                    label="Kênh ảnh"
                                                    labelClassName="label"
                                                    className="text-input"
                                                    disabled={false}
                                                    options={optionsList.artChannels}
                                                />}
                                            </div>
                                        </div>

                                        <div className='split'>
                                            {optionsList.privacies.length > 0 && <FastField
                                                name='privacy'
                                                component={SelectField}

                                                label="Ai có thể xem?"
                                                labelClassName="label"
                                                className="text-input"
                                                disabled={false}
                                                options={optionsList.privacies}
                                            />}
                                            
                                            <div>
                                                <FastField
                                                    name="tags"
                                                    component={InputField}

                                                    label="Thẻ"
                                                    labelClassName="label"
                                                    className="text-input"
                                                    disabled={false}
                                                    placeholder="Nhập thẻ"
                                                    debounce={tagsDebounce}
                                                />

                                                <legend className="tags">
                                                    <small className="caption"><span>Chú thích</span> Sử dụng thẻ để tăng sự tương tác giữa tác phẩm với người xem</small>

                                                    <small className="tags-list">{tags[0] !== '' ? tags.map((tag,index) => (
                                                        <div className="tag" key={index}>{tag}</div>
                                                    )) : 'Chưa có thẻ nào.'}</small>
                                                </legend>
                                            </div>
                                        </div>
                                    </form>
                                );
                            }}
                        </Formik>
                    </div>
                )}

                {user.id == art.user_id && (
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
                                <div className="action" onMouseDown={handleDelete} onMouseUp={handleCancelDelete} onMouseLeave={handleCancelDelete}>
                                    <i className="fas fa-trash"></i>
                                </div>
                            </React.Fragment>
                        ) : (
                            <img className="loading" src="https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"/>
                        )}
                    </div>
                )}

                <div className="upload-date">
                    <p className="date"><span>Vào lúc : </span><Moment format="H:m:sA D/MM/yyyy">{art.created_at}</Moment></p>
                </div>

                <CommentSection artId={art.id}/>
            </div>
        </div>
    );
}

export default ShowArt;