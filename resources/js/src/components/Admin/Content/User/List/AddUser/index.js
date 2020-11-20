import Axios from 'axios';
import { FastField, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAnnouncerMessage } from '../../../../../../store/admin/announcer';
import { RegisterValidationSchema } from '../../../../../Auth/Validation';
import FileUploader from '../../../../../CustomFields/FileUploader';
import InputField from '../../../../../CustomFields/InputField';
import SelectField from '../../../../../CustomFields/SelectField';
import _ from 'lodash';
import PropTypes from 'prop-types';

AddUser.propTypes = {
    closeAddUserForm: PropTypes.func.isRequired,
    listRefresh: PropTypes.func.isRequired,
}

AddUser.defaultProps = {
    closeAddUserForm: null,
    listRefresh: null,
}


function AddUser(props) {
    const {closeAddUserForm, listRefresh} = props;
    const dispatch = useDispatch();

    // Kiểm tra hợp lệ
    const validationSchema = RegisterValidationSchema;

    // File
    const [file,setFile] = useState({});
    // => Xử lý File
    const handleSetFile = async (event) => {
        setFile(event.target.files[0]);
    }
    // => Hình Preview
    const [preview,setPreview] = useState('');
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

    // Lựa chọn
    const options = [
        {value:'user',label:'Người dùng'},
        {value:'admin',label:'Quản trị viên'}
    ]

    // Xử lý thêm người dùng
    const handleOnSubmitAddUser = async (values) => {
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
        Axios.post(`/public/api/admin/resources/users?api_token=${apiToken}`,data).then(response => {
            const {data:{message}} = response;
            const action = setAnnouncerMessage(message);
            dispatch(action);
            listRefresh();
            closeAddUserForm();
        }).catch(error => {
            const {data:{message}} = error.response;
            const action = setAnnouncerMessage(message);
            dispatch(action);
        }); 
    }


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleOnSubmitAddUser}>
            {({handleSubmit}) => {
                return (
                    <form onSubmit={handleSubmit}>

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
                            defaultValue={options[0].value}
                        />

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
                            
                            label='Xác nhận mật khẩu'
                            labelClassName='label'
                            // placeholder='Điền lại mật khẩu'
                            // className='text-input mt1'
                            type='password'
                            disabled={false}
                        />
                        
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

                        {preview ? <img className="profile-picture-preview" src={preview}></img> : <p className="no-file">Chưa có ảnh</p>}

                        <div className="form-buttons-group">
                            <button type="submit">THÊM</button><button onClick={closeAddUserForm}>ĐÓNG</button>
                        </div>
                    </form>
                );
            }}
        </Formik>
    );
}

export default AddUser;