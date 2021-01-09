import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import _, { fill, isEmpty, isEqual, isNull, set, values } from 'lodash';
import { useSelector } from 'react-redux';
import { FastField, Formik } from 'formik';
import SelectField from '../../../CustomFields/SelectField';
import InputField from '../../../CustomFields/InputField';
import TextareaField from '../../../CustomFields/TextareaField';

function ShowArt() {
    const { id } = useParams();
    const [editMode,setEditMode] = useState(false);
    const [art,setArt] = useState({});
    const user = useSelector(state => state.auth.authenticatedUser);
    const [optionsList,setOptionsList] = useState({
        artChannels:[],
        dimensions:[],
        privacies:[],
    });
    const [isDiff,setIsDiff] = useState(false);
    const editFormRef = useRef();
    const tagsDebounce = {
        callback: (value) => {
            const tagsList = value.split(',').filter(tag => tag !== '');
            setTags(tagsList);
        },
        ms:250,
    }
    const [tags,setTags] = useState([]);

    useEffect(() => {
        const getArt = async () => {
            await Axios.get(`/public/api/community/resources/arts/get/${id}`).then(response => {
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
                }

                setArt({
                    ...art,
                    dimensional: art.dimension_id.toString(),
                    channel: art.art_channel_id.toString(),
                    privacy: art.privacy_id.toString(),
                    tags:art.tags.join(','),
                });

                if (!isNull(art.tags)) {
                    setTags(art.tags);
                }

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
    },[]);

    const handleEditSubmit = async (values) => {
        const data = new FormData;
        const fillable = ['channel','dimensional','privacy','description','tags'];
        for (const key in values) {
            if (fillable.includes(key))
            data.append(key,values[key]);
        }
        data.append('_method','PATCH');
        const apiToken = localStorage.getItem('authenticatedUserToken');
        await Axios.post(`/public/api/community/resources/arts/${values.id}?api_token=${apiToken}`,data).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error.response);
        });
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
                    <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} />
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
                                    {art.showcase_arts.map((showcase,index) => (
                                        <Link to={`/public/community/showcase/${showcase.showcase_id}`} key={index}>
                                            <div className="showcase">
                                                <div className="showcase-thumbnail">
                                                    <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/cyberpunk_2077_refund.jpg"/>
                                                </div>
                                                <div className="showcase-title">
                                                    <p>
                                                        {showcase.showcases.title}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
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

                {(editMode && user.id == art.user_id) && (
                    <div className="edit-form">
                        {/* <div className="dash" style={{backgroundImage:`url(/storage/app/public/web/body/communityGallery/warning-dashline.png)`}}></div> */}
                        <Formik initialValues={art} onSubmit={handleEditSubmit} innerRef={editFormRef}>
                            {({values,handleSubmit}) => {
                                // console.log(values,art);
                                if (!isEqual(values,art)) {
                                    setIsDiff(true);
                                } else {
                                    setIsDiff(false);
                                }
                                return (
                                    <form className="form" onSubmit={handleSubmit}>
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
                        <div className="action">
                            <i className="fas fa-trash"></i>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShowArt;