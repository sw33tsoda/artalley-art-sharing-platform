import { FastField, Formik } from 'formik';
import { isEmpty, isNull } from 'lodash';
import React, { useState } from 'react';
import InputField from '../../../../CustomFields/InputField';
import TextareaField from '../../../../CustomFields/TextareaField';

function Profile(props) {
    const { user } = props;
    const initialValues = {};
    const [avatarPreview,setAvatarPreview] = useState(!isNull(user.profile_picture) ? user.profile_picture : '');
    const [bannerPreview,setBannerPreview] = useState(!isNull(user.banner) ? user.banner : '');

    if (!isEmpty(user)) {
        const allowedKeys = ['firstname','lastname','username','email','bio','facebook','twitter'];
        for (const key in user) {
            if (allowedKeys.includes(key)) {
                initialValues[key] = user[key];
            }
        }
        Object.assign(initialValues,{
            password:null,
            password_confirmation:null,
            profile_picture:null,
            banner:null,
        });
    }
    
    return (
        <div className="profile">
            <div className="header">
                {/* <h1 className="title">Thông tin cá nhân</h1> */}
            </div>
            <div className="content">
                {!isEmpty(initialValues) && <Formik initialValues={initialValues}>
                    {() => {
                        
                        return (
                            <form className="form">
                                    <div className="split mb1">
                                        <div className="wrapper">
                                            <label className="label">Ảnh đại diện</label>
                                            <div className="profile-picture">
                                            {avatarPreview !== '' ? (<React.Fragment>
                                                    <div className="overlay">
                                                        {/* 1 nút thay đổi */}
                                                        {/* 1 nút xóa ảnh hiện tại */}
                                                    </div>
                                                    <img className="avatar preview" src={`/storage/app/public/profilePictures/${avatarPreview}`} />
                                                </React.Fragment>) : <p className="no-image">Không có ảnh</p>}
                                            </div>
                                        </div>

                                        <div className="wrapper">
                                            <label className="label">Ảnh bìa</label>
                                            <div className="banner">
                                                {bannerPreview !== '' ? (<React.Fragment>
                                                    <div className="overlay">
                                                        {/* 1 nút thay đổi */}
                                                        {/* 1 nút xóa ảnh hiện tại */}
                                                    </div>
                                                    <img className="banner preview" src={`/storage/app/public/profilePictures/${bannerPreview}`} />
                                                </React.Fragment>) : <p className="no-image">Không có ảnh</p>}
                                            </div>
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
                            </form>
                        )
                    }}
                </Formik>}
            </div>
        </div>
    );
}

export default Profile;