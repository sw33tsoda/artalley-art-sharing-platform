import Axios from 'axios';
import { FastField, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnnouncerMessage } from '../../../../../../store/admin/announcer';
import { EditUserValidationSchema } from '../../../../../Auth/Validation';
import FileUploader from '../../../../../CustomFields/FileUploader';
import InputField from '../../../../../CustomFields/InputField';
import SelectField from '../../../../../CustomFields/SelectField';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { authRefresh } from '../../../../../../store/auth';

AddEditForm.propTypes = {
    closeAddEditForm: PropTypes.func.isRequired,
    listRefresh: PropTypes.func,
    formType: PropTypes.string.isRequired,
    userInfo: PropTypes.object,
}

AddEditForm.defaultProps = {
    closeAddEditForm: null,
    // listRefresh: null,
    formType:'add',
    userInfo: {},
}


function AddEditForm(props) {
    const {closeAddEditForm, listRefresh, formType, userInfo} = props;
    const dispatch = useDispatch();

    const { authenticatedUser } = useSelector(state => state.auth);

    // Kiểm tra hợp lệ
    const validationSchema = EditUserValidationSchema;

    // File
    const [file,setFile] = useState({});
    // => Xử lý File
    const handleSetFile = async (event) => {
        setFile(event.target.files[0]);
    }
    // => Hình Preview
    const [preview,setPreview] = useState((function () {
        if (!userInfo.profile_picture) {
            return '';
        }
        return '/storage/app/public/profilePictures/' + userInfo.profile_picture;
    })());
    if (_.isEmpty(file.name) == false) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreview(reader.result);
        }
    }

    // Giá trị mặc định ban đầu
    const initialValues = {
        firstname:'',
        lastname:'',
        username:'',
        password:'',
        role:'user',
        password_confirmation:'',
        email:'',
        profile_picture:'',
    }

    if (formType == 'edit') {
        for (const key in initialValues) {
            if (key == 'profile_picture') continue;
            initialValues[key] = userInfo[key] == null ? '' : userInfo[key];
        }
    }

    // Lựa chọn
    const options = [
        {value:'user',label:'Người dùng'},
        {value:'admin',label:'Quản trị viên'}
    ]

    // Xử lý thêm người dùng
    const handleSubmitForm = async (values) => {
        const apiToken = localStorage.getItem('authenticatedUserToken');
        const data = new FormData();
        for (const key in values) {
            if (key !== 'password_confirmation') {
                if (key == 'profile_picture') {
                    data.append(key,file);
                } else {
                    data.append(key,values[key]);
                }
            }
        }

        (function () {
            if (formType == 'edit') {
                data.append('_method','PATCH');
                return Axios.post(`/public/api/admin/resources/users/${userInfo.id}?api_token=${apiToken}`,data);
            }
            return Axios.post(`/public/api/admin/resources/users?api_token=${apiToken}`,data);
        })().then(response => {
            const {data:{message}} = response;
            const action = setAnnouncerMessage(message);
            dispatch(action);
            if (listRefresh) {
                listRefresh();
            }
            closeAddEditForm(formType);
            if (formType == 'edit' && userInfo.id == authenticatedUser.id) {
                dispatch(authRefresh());
            }
        }).catch(error => {
            const {data:{message}} = error.response;
            const action = setAnnouncerMessage(message);
            dispatch(action);
        }); 
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmitForm}>
            {({handleSubmit,values}) => {
                return (
                    <form onSubmit={handleSubmit}>

                        <div className="first-last-name">
                            <FastField
                                name='firstname'
                                component={InputField}
                                
                                label='Tên'
                                labelClassName='label'
                                // placeholder='Tên của bạn?'
                                // className='text-input mt1'
                                type='text'
                                disabled={false}
                            />

                            <FastField
                                name='lastname'
                                component={InputField}
                                
                                label='Họ'
                                labelClassName='label'
                                // placeholder='Tên họ của bạn?'
                                // className='text-input mt1'
                                type='text'
                                disabled={false}
                            />
                        </div>

                        <FastField
                            name='username'
                            component={InputField}
                            
                            label='Tên người dùng'
                            labelClassName='label'
                            // placeholder='Tên người dùng sẽ là...'
                            // className='text-input mt1'
                            type='text'
                            disabled={false}
                        />
                        
                        
                        <FastField
                            name="role"
                            component={SelectField}

                            label='Vai trò'
                            labelClassName='label'
                            disabled={false}
                            options={options}
                            // defaultValue={formType == 'add' ? options[0].value : userInfo.role}
                        />

                        <div className="password-and-confirmation">
                            <FastField
                                name='password'
                                component={InputField}
                                
                                label='Mật khẩu'
                                labelClassName='label'
                                // placeholder='Mật khẩu'
                                // className='text-input mt1'
                                type='password'
                                disabled={false}
                            />


                            <FastField
                                name='password_confirmation'
                                component={InputField}
                                
                                label='Xác nhận'
                                labelClassName='label'
                                // placeholder='Điền lại mật khẩu'
                                // className='text-input mt1'
                                type='password'
                                disabled={false}
                            />
                        </div>
                        
                        <FastField
                            name='email'
                            component={InputField}
                            
                            label='Địa chỉ Email'
                            labelClassName='label'
                            // placeholder='example@example.com'
                            // className='text-input mt1'
                            type='email'
                            disabled={false}
                        />

                        <FastField
                            name='profile_picture'
                            component={FileUploader}
                            label='Ảnh đại diện'
                            labelClassName='label'
                            type='file'
                            disabled={false}
                            setFile={handleSetFile}
                        />

                        {preview !== '' ? <img className="profile-picture-preview" src={preview}></img> : <p className="no-file">Chưa có ảnh</p>}

                        <div className="form-buttons-group">
                            <button type="submit">{formType == 'add' ? 'THÊM' : 'SỬA'}</button><button onClick={() => closeAddEditForm(formType)}>ĐÓNG</button>
                        </div>
                    </form>
                );
            }}
        </Formik>
    );
}

export default AddEditForm;