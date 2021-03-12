import { FastField, Formik, isEmptyArray } from 'formik';
import React, { useEffect, useState } from 'react';
import InputField from './../../../../../../../CustomFields/InputField';
import TextareaField from './../../../../../../../CustomFields/TextareaField';
import SelectField from './../../../../../../../CustomFields/SelectField';
import FileUploader from './../../../../../../../CustomFields/FileUploader';
import {RegisterValidationSchema} from './../../../../../../../Validations';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAnnouncerMessage } from '../../../../../../../../store/admin/announcer';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

AddEditForm.propTypes = {
    type: PropTypes.string,
    user: PropTypes.object,
}


AddEditForm.defaultProps = {
    type: 'add',
    user: {},
}


function AddEditForm({type,userInfo}) {
    const [user,setUser] = useState({});

    const [profilePictureFile,setProfilePictureFile] = useState([]);
    const [profilePicturePreview,setProfilePicturePreview] = useState([]);

    const [bannerFile,setBannerFile] = useState([]);
    const [bannerPreview,setBannerPreview] = useState([]);

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        if (type == 'edit') {
            (async function(){
                await Axios.get(`/public/api/admin/resources/users/${id}?api_token=${localStorage.getItem('authenticatedUserToken')}`).then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error.response);
                });
            })();
        } else {
            setUser(userInfo);
        }
    },[id]);

    const loadPreview = (file,type) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            if (type == 'profile_picture') setProfilePicturePreview(reader.result);
            else setBannerPreview(reader.result);
        }
    }

    const handleSetProfilePictureFile = (selectedFile) => {
        const file = selectedFile;
        setProfilePictureFile(file);
        loadPreview(file,'profile_picture');
    }

    const handleSetBannerFile = (selectedFile) => {
        const file = selectedFile;
        setBannerFile(file);
        loadPreview(file,'banner');

    }

    const handleOnSubmitForm = async (values,{resetForm}) => {
        const data = new FormData();
        for (const key in values) {
            data.append(key,values[key]);
        }

        await Axios.post(`/public/api/admin/resources/users?api_token=${localStorage.getItem('authenticatedUserToken')}`,data).then(response => {
            const {message} = response.data;
            dispatch(setAnnouncerMessage(message));
            resetForm();
        }).catch(error => {
            const {message} = error.response.data;
            dispatch(setAnnouncerMessage(message));
        });
    }

    return (
        <div className="add-edit-form">
            <Formik onSubmit={handleOnSubmitForm} initialValues={{
                firstname:'',
                lastname:'',
                username:'',
                email:'',
                facebook:'',
                twitter:'',
                bio:'',
                role:'user',
                password:'',
                password_confirmation:'',
                profile_picture:null,
                banner:null,
            }} validationSchema={RegisterValidationSchema}>
                {({handleSubmit,values,errors}) => {
                    // console.log(values,errors);
                    return (
                        <form onSubmit={handleSubmit} className="admin-form">
                            <div className="grid-box">
                                <FastField
                                    name="firstname"
                                    component={InputField}

                                    label="Tên"
                                    className="text-input"  
                                    placeholder="Nhập tên"
                                />
                                <FastField
                                    name="lastname"
                                    component={InputField}

                                    label="Họ"
                                    className="text-input"
                                    placeholder="Nhập họ"
                                />
                            </div>

                            <FastField
                                name="username"
                                component={InputField}

                                label="Tên người dùng"
                                className="text-input"  
                                placeholder="Nhập tên người dùng"
                            />

                            <FastField
                                name="email"
                                component={InputField}

                                label="Địa chỉ Email"
                                className="text-input"  
                                placeholder="Nhập địa chỉ Email (Ex: something@gmail.com)"
                            />
                            
                            <div className="grid-box">
                                <FastField
                                    name="password"
                                    component={InputField}

                                    label="Mật khẩu"
                                    className="text-input"  
                                    placeholder="Nhập mật khẩu"
                                />
                                <FastField
                                    name="password_confirmation"
                                    component={InputField}

                                    label="Nhập lại mật khẩu"
                                    className="text-input"
                                    placeholder="nhập lại mật khẩu"
                                />
                            </div>

                            <div className="grid-box">
                                <FastField
                                    name="facebook"
                                    component={InputField}

                                    label="Facebook"
                                    className="text-input"  
                                    placeholder="Nhập Facebook"
                                />
                                <FastField
                                    name="twitter"
                                    component={InputField}

                                    label="Twitter"
                                    className="text-input"
                                    placeholder="Nhập Twitter"
                                />
                            </div>

                            <FastField
                                name="bio"
                                component={TextareaField}

                                label="Tiểu sử"
                                className="text-input"  
                                placeholder="Nhập tiểu sử"
                            />

                            <FastField
                                name="role"
                                component={SelectField}

                                label="Vai trò"
                                className="text-input"
                                options={[
                                    {value:'user',label:'Thành viên'},
                                    {value:'admin',label:'Quản trị viên'},
                                ]}
                            />

                            <div className="grid-box pics">
                                <div className="wrapper">
                                    <label className="label">Ảnh đại diện</label>
                                    <div className="profile-piture preview">
                                        {isEmptyArray(profilePicturePreview) ? <label className="add-pic" htmlFor="profile_picture">Tải lên</label> : <img src={profilePicturePreview} />}
                                        {!isEmptyArray(profilePicturePreview) && <div className="overlay">
                                            <label htmlFor="profile_picture">Thay đổi</label>
                                        </div>}
                                    </div>
                                    {errors['profile_picture'] && <small className="form-error">{errors['profile_picture']}</small>}
                                </div>

                                <div className="wrapper">
                                    <label className="label">Ảnh bìa</label>
                                    <div className="banner-picture preview">
                                        {isEmptyArray(bannerPreview) ? <label className="add-pic" htmlFor="banner">Tải lên</label> : <img src={bannerPreview} />}
                                        {!isEmptyArray(bannerPreview) && <div className="overlay">
                                            <label htmlFor="banner">Thay đổi</label>
                                        </div>}
                                    </div>
                                    {errors['banner'] && <small className="form-error">{errors['banner']}</small>}
                                </div>
                            </div>

                            <FastField
                                name='profile_picture_name'
                                component={FileUploader}
                                
                                // label='Nhập ảnh'
                                fieldName='profile_picture'
                                disabled={false}
                                setFile={handleSetProfilePictureFile}
                                hidden={true}
                            />

                            <FastField
                                name='banner_name'
                                component={FileUploader}
                                
                                // label='Nhập ảnh'
                                fieldName='banner'
                                disabled={false}
                                setFile={handleSetBannerFile}
                                hidden={true}
                            />         

                            <button className="button button-crimson submit" type="submit">Thêm</button> 
                        </form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default AddEditForm;