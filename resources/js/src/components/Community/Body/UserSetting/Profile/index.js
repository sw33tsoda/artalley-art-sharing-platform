import { FastField, Formik } from 'formik';
import { isEmpty } from 'lodash';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRefresh } from '../../../../../store/auth';
import InputField from '../../../../CustomFields/InputField';
import TextareaField from '../../../../CustomFields/TextareaField';

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.authenticatedUser);
    const initialValues = {};

    useEffect(() => {
        dispatch(authRefresh());
    },[]);
    
    if (!isEmpty(user)) {
        const allowedKeys = [
            'firstname','lastname','username','email',
            'bio','facebook','twitter'
        ];
        for (const key in user) {
            if (allowedKeys.includes(key)) {
                initialValues[key] = user[key];
            }
        }
        Object.assign(initialValues,{
            password:'',
            password_confirmation:'',
            profile_picture:'',
            banner:'',
        });
        console.log(initialValues);
    }

    return (
        <div className="profile">
            <div className="header">
                <h1 className="page-title">Cài đặt</h1>
                <p className="page-path">Cộng đồng / Cài đặt</p>
            </div>
            <div className="content">
                {!isEmpty(initialValues) && <Formik initialValues={initialValues}>
                    {() => {
                        
                        return (
                            <form className="form">
                                    <div className="split">
                                        <div className="profile-picture">
                                            <div className="overlay">
                                                {/* 1 nút thay đổi */}
                                                {/* 1 nút xóa ảnh hiện tại */}
                                            </div>
                                            <img src="#" />
                                        </div>

                                        <div className="banner">
                                            <div className="overlay">
                                                {/* 1 nút thay đổi */}
                                                {/* 1 nút xóa ảnh hiện tại */}
                                            </div>
                                            <img src="#" />
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
                                                className='text-input mt1'
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
                                                className='text-input mt1'
                                                type='text'
                                                disabled={false}
                                            />
                                        </div>
                                    </div>

                                    <div className="split">
                                        <div className="username">
                                            <label className="label">Tên người dùng</label>
                                            <div className="input">
                                                <p className="profile-path">/community/user/</p>
                                                <FastField
                                                    name='username'
                                                    component={InputField}
                                                    
                                                    // label='Tên người dùng'
                                                    // labelClassName='label'
                                                    placeholder='Tên của bạn?'
                                                    className='text-input mt1'
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
                                                className='text-input mt1'
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
                                            className='text-input mt1'
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
                                                className='text-input mt1'
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
                                                className='text-input mt1'
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