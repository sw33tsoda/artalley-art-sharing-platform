import Axios from 'axios';
import { FastField, Formik } from 'formik';
import { isEmpty, isEqual, isNull } from 'lodash';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authRefresh } from '../../../../../store/auth';
import { setAnnouncementMessage } from '../../../../../store/community/announcer';
import FileUploader from '../../../../CustomFields/FileUploader';
import InputField from '../../../../CustomFields/InputField';
import TextareaField from '../../../../CustomFields/TextareaField';
import { UserProfileValidation } from '../../../../Validations';

function Profile(props) {
    const { user } = props;
    const dispatch = useDispatch();
    const initialValues = {};
    const [profilePicturePreview,setProfilePicturePreview] = useState(!isNull(user.profile_picture) ? `/storage/app/public/profilePictures/` + user.profile_picture : '');
    const [bannerPreview,setBannerPreview] = useState(!isNull(user.banner) ? `/storage/app/public/banners/` + user.banner : '');

    // const [profilePicture,setProfilePicture] = useState({});
    // const [banner,setBanner] = useState({});

    const handleSetPreview = (file,type) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            var url = reader.result;
            if (type == 'profilePicture') {
                setProfilePicturePreview(url);
            } else {
                setBannerPreview(url);
            }
        }
    }

    const handleSetProfilePictureFile = (file) => {
        // setProfilePicture(file);
        handleSetPreview(file,'profilePicture');
    }

    const handleSetBannerFile = (file) => {
        // setBanner(file);
        handleSetPreview(file,'banner');
    }

    if (!isEmpty(user)) {
        const allowedKeys = ['firstname','lastname','username','email','bio','facebook','twitter'];
        for (const key in user) {
            if (allowedKeys.includes(key)) {
                if (isNull(user[key]))
                    initialValues[key] = '';
                else 
                    initialValues[key] = user[key];
            }
        }
        Object.assign(initialValues,{
            password:'',
            password_confirmation:'',
            profile_picture:null,
            banner:null,
        });
    }

    const handleSubmitForm = async (values) =>  {
        const apiToken = localStorage.getItem('authenticatedUserToken');
        const data = new FormData();
        for (const key in values) {
            data.append(key,values[key]);
        }
        data.append('_method','PATCH');
        await Axios.post(`/public/api/community/resources/users/${user.id}?api_token=${apiToken}`,data).then(response => {
            const {data:{message}} = response;
            console.log(response);
            dispatch(setAnnouncementMessage({
                message:message,
                type:'success'
            }));
            dispatch(authRefresh());
        }).catch(error => {
            const {data:{message}} = error.response;
            dispatch(setAnnouncementMessage({
                message:message,
                type:'danger'
            }));
        })
    }
    

    return (
        <div className="profile">
            <div className="header">
                {/* <h1 className="title">Thông tin cá nhân</h1> */}
            </div>
            <div className="content">
                {!isEmpty(initialValues) && <Formik initialValues={initialValues} validationSchema={UserProfileValidation} onSubmit={handleSubmitForm}>
                    {({errors,values,handleSubmit}) => {
                        console.log(values);
                        return (
                            <form className="form" onSubmit={handleSubmit}>
                                    <div className="split mb1">
                                        <div className="wrapper">
                                            <label className="label">Ảnh đại diện</label>
                                            <div className="profile-picture">
                                            {profilePicturePreview !== '' ? (<React.Fragment>
                                                    <div className="overlay">
                                                        <div className="box">
                                                            <label htmlFor='profile_picture'>
                                                                <i className="fas fa-camera"></i>
                                                            </label>
                                                        </div>
                                                        {!isNull(user.profile_picture) && <div className="box">
                                                            <i className="fas fa-trash-alt"></i>
                                                        </div>}
                                                    </div>
                                                    {!isEmpty(errors.profile_picture) ? <p className="image-error">{errors.profile_picture}</p> :  <img className="banner-preview" src={`${profilePicturePreview}`} />}
                                                </React.Fragment>) : <div className="no-image"><label htmlFor="profile_picture">Bấm để tải ảnh <i class="fas fa-camera"></i></label></div>}
                                            </div>
                                            <FastField
                                                name='avatarFile'
                                                component={FileUploader}
                                                
                                                fieldName='profile_picture'
                                                disabled={false}
                                                setFile={handleSetProfilePictureFile}
                                                hidden={true}
                                            />
                                        </div>

                                        <div className="wrapper">
                                            <label className="label">Ảnh bìa</label>
                                            <div className="banner">
                                                {bannerPreview !== '' ? (<React.Fragment>
                                                    <div className="overlay">
                                                        <div className="box">
                                                            <label htmlFor="banner">
                                                                <i className="fas fa-camera"></i>
                                                            </label>
                                                        </div>
                                                        {!isNull(user.banner) && <div className="box">
                                                            <i class="fas fa-trash-alt"></i>
                                                        </div>}
                                                    </div>
                                                    {!isEmpty(errors.banner) ? <p className="image-error">{errors.banner}</p> :  <img className="banner-preview" src={`${bannerPreview}`} />}
                                                   
                                                </React.Fragment>) : <div className="no-image"><label htmlFor="banner">Bấm để tải ảnh <i className="fas fa-camera"></i></label></div>}
                                            </div>
                                            <FastField
                                                name='bannerFile'
                                                component={FileUploader}
                                                
                                                fieldName='banner'
                                                disabled={false}
                                                setFile={handleSetBannerFile}
                                                hidden={true}
                                            />
                                        </div>
                                    </div>

                                    <div className="split">
                                        <div className="firstname">
                                            <FastField
                                                name='firstname'
                                                component={InputField}
                                                
                                                label='Họ'
                                                labelClassName='label'
                                                placeholder='Họ của bạn?'
                                                className='text-input mb1'
                                                type='text'
                                                disabled={false}
                                            />
                                        </div>
                                        <div className="lastname">
                                            <FastField
                                                name='lastname'
                                                component={InputField}
                                                
                                                label='Tên'
                                                labelClassName='label'
                                                placeholder='Tên của bạn?'
                                                className='text-input mb1'
                                                type='text'
                                                disabled={false}
                                            />
                                        </div>
                                    </div>

                                    <div className="split">
                                        <div className="username">
                                            <label className="label">Tên người dùng</label>
                                            <div className="input">
                                                <FastField
                                                    name='username'
                                                    component={InputField}
                                                    
                                                    // label='Tên người dùng'
                                                    // labelClassName='label'
                                                    placeholder='Tên của bạn?'
                                                    className='text-input mb1'
                                                    type='text'
                                                    disabled={false}
                                                />
                                            </div>
                                        </div>

                                        <div className="email">
                                            <FastField
                                                name='email'
                                                component={InputField}
                                                
                                                label='Email'
                                                labelClassName='label'
                                                placeholder='Tên của bạn?'
                                                className='text-input mb1'
                                                type='text'
                                                disabled={false}
                                            />
                                        </div>
                                    </div>

                                    <div className="bio">
                                        <FastField
                                            name='bio'
                                            component={TextareaField}
                                            
                                            label='Tên người dùng'
                                            labelClassName='label'
                                            placeholder='Tiểu sử bản thân.'
                                            className='text-input mb1'
                                            type='text'
                                            disabled={false}
                                        />
                                    </div>

                                    <div className="split">
                                        <div className="facebook">
                                            <FastField
                                                name='facebook'
                                                component={InputField}
                                                
                                                label='Facebook'
                                                labelClassName='label'
                                                placeholder=''
                                                className='text-input mb1'
                                                type='text'
                                                disabled={false}
                                            />
                                        </div>

                                        <div className="twitter">
                                            <FastField
                                                name='twitter'
                                                component={InputField}
                                                
                                                label='Twitter'
                                                labelClassName='label'
                                                placeholder=''
                                                className='text-input mb1'
                                                type='text'
                                                disabled={false}
                                            />
                                        </div>
                                    </div>

                                    <div className="split">
                                        <div className="facebook">
                                            <FastField
                                                name='password'
                                                component={InputField}
                                                
                                                label='Mật khẩu'
                                                labelClassName='label'
                                                placeholder=''
                                    
                                                className='text-input mb1'
                                                type='password'
                                                disabled={false}
                                            />
                                        </div>

                                        <div className="twitter">
                                            <FastField
                                                name='password_confirmation'
                                                component={InputField}
                                                
                                                label='Nhập lại mật khẩu'
                                                labelClassName='label'
                                                placeholder=''
                                                className='text-input mb1'
                                                type='password'
                                                disabled={false}
                                            />
                                        </div>
                                    </div>
                                    {!isEqual(values,initialValues) && <button type="submit" className="button danger submit">Update</button>}
                            </form>
                        )
                    }}
                </Formik>}
            </div>
        </div>
    );
}

export default Profile;