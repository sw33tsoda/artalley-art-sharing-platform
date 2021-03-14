import React, { useEffect,useState } from 'react';
import InputField from './../../../../../../../CustomFields/InputField';
import TextareaField from './../../../../../../../CustomFields/TextareaField';
import SelectField from './../../../../../../../CustomFields/SelectField';
import FileUploader from './../../../../../../../CustomFields/FileUploader';
import { RegisterValidationSchema, UserProfileValidation} from './../../../../../../../Validations';
import { FastField, Formik } from 'formik';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAnnouncerMessage } from '../../../../../../../../store/admin/announcer';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import LoadingSpinner from '../../../../../../LoadingSpinner';

AddEditForm.propTypes = {
    type: PropTypes.string,
    user: PropTypes.object,
}


AddEditForm.defaultProps = {
    type: 'add',
    user: {},
}


function AddEditForm({type}) {
    const [profilePicturePreview,setProfilePicturePreview] = useState('');
    const [bannerPreview,setBannerPreview] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const [initialValues,setInitialValues] = useState({
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
    });

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        if (type == 'edit') {
            (async function(){
                await Axios.get(`/public/api/admin/resources/users/${id}?api_token=${localStorage.getItem('authenticatedUserToken')}`).then(response => {
                    const temp = {};
                    for (const key in initialValues) {
                        if (!['profile_picture','banner'].includes(key)) 
                            temp[key] = response.data.user_info[key] == null ? '' : response.data.user_info[key];
                    }
                    setInitialValues({...temp});
                    if (response.data.user_info.profile_picture !== null) 
                        setProfilePicturePreview('/storage/app/public/profilePictures/' + response.data.user_info.profile_picture); 
                    else setProfilePicturePreview('');

                    if (response.data.user_info.banner !== null) 
                        setBannerPreview('/storage/app/public/banners/' + response.data.user_info.banner); 
                    else setBannerPreview('');
                    setIsLoading(false);
                }).catch(error => {
                    console.log(error.response);
                });
            })();
        } else {
            setBannerPreview('');
            setProfilePicturePreview('');
            setIsLoading(false);
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
        loadPreview(file,'profile_picture');
    }

    const handleSetBannerFile = (selectedFile) => {
        const file = selectedFile;
        loadPreview(file,'banner');
    }

    const handleOnSubmitForm = (values,{resetForm,setSubmitting}) => {
        const data = new FormData();
        for (const key in values) {
            data.append(key,values[key]);
        }

        setTimeout(() => {
            (async function(){
                if (type == 'edit') {
                    data.append('_method','PATCH');
                    return await Axios.post(`/public/api/admin/resources/users/${id}?api_token=${localStorage.getItem('authenticatedUserToken')}`,data);
                }
                return await Axios.post(`/public/api/admin/resources/users?api_token=${localStorage.getItem('authenticatedUserToken')}`,data);
            })().then(response => {
                const {message} = response.data;
                // console.log(response);
                dispatch(setAnnouncerMessage(message));
                if (type !== 'edit') {
                    resetForm();
                }
                setSubmitting(false);
            }).catch(error => {
                const {message} = error.response.data;
                dispatch(setAnnouncerMessage(message));
            });
        },1000)
    }

    return (
        <LoadingSpinner isLoading={isLoading}>
            <div className="add-edit-form">
                <Formik onSubmit={handleOnSubmitForm} initialValues={type == 'add' ? {
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
                } : initialValues} enableReinitialize={true} validationSchema={type == 'edit' ? UserProfileValidation : RegisterValidationSchema}>
                    {({handleSubmit,errors,isSubmitting}) => {
                        // console.log(isSubmitting);
                        return (
                            <form onSubmit={handleSubmit} className="admin-form">
                                <div className="grid-box">
                                    <FastField
                                        name="firstname"
                                        component={InputField}

                                        label="Tên"
                                        className="text-input"  
                                        placeholder="Nhập tên"
                                        disabled={isSubmitting}
                                    />
                                    <FastField
                                        name="lastname"
                                        component={InputField}

                                        label="Họ"
                                        className="text-input"
                                        placeholder="Nhập họ"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <FastField
                                    name="username"
                                    component={InputField}

                                    label="Tên người dùng"
                                    className="text-input"  
                                    placeholder="Nhập tên người dùng"
                                    disabled={isSubmitting}
                                />

                                <FastField
                                    name="email"
                                    component={InputField}

                                    label="Địa chỉ Email"
                                    className="text-input"  
                                    placeholder="Nhập địa chỉ Email (Ex: something@gmail.com)"
                                    disabled={isSubmitting}
                                />
                                
                                <div className="grid-box">
                                    <FastField
                                        name="password"
                                        component={InputField}

                                        label="Mật khẩu"
                                        className="text-input"  
                                        placeholder="Nhập mật khẩu"
                                        disabled={isSubmitting}
                                    />
                                    <FastField
                                        name="password_confirmation"
                                        component={InputField}

                                        label="Nhập lại mật khẩu"
                                        className="text-input"
                                        placeholder="nhập lại mật khẩu"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="grid-box">
                                    <FastField
                                        name="facebook"
                                        component={InputField}

                                        label="Facebook"
                                        className="text-input"  
                                        placeholder="Nhập Facebook"
                                        disabled={isSubmitting}
                                    />
                                    <FastField
                                        name="twitter"
                                        component={InputField}

                                        label="Twitter"
                                        className="text-input"
                                        placeholder="Nhập Twitter"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <FastField
                                    name="bio"
                                    component={TextareaField}

                                    label="Tiểu sử"
                                    className="text-input"  
                                    placeholder="Nhập tiểu sử"
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
                                />

                                <div className="grid-box pics">
                                    <div className="wrapper">
                                        <label className="label">Ảnh đại diện</label>
                                        <div className="profile-piture preview">
                                            {profilePicturePreview == '' ? <label className="add-pic" htmlFor="profile_picture">Tải lên</label> : <img src={profilePicturePreview} />}
                                            {profilePicturePreview !== '' && <div className="overlay">
                                                <label htmlFor="profile_picture">Thay đổi</label>
                                            </div>}
                                        </div>
                                        {errors['profile_picture'] && <small className="form-error">{errors['profile_picture']}</small>}
                                    </div>

                                    <div className="wrapper">
                                        <label className="label">Ảnh bìa</label>
                                        <div className="banner-picture preview">
                                            {bannerPreview == '' ? <label className="add-pic" htmlFor="banner">Tải lên</label> : <img src={bannerPreview} />}
                                            {bannerPreview !== '' && <div className="overlay">
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
                                    disabled={isSubmitting}
                                    setFile={handleSetProfilePictureFile}
                                    hidden={true}
                                />

                                <FastField
                                    name='banner_name'
                                    component={FileUploader}
                                    
                                    // label='Nhập ảnh'
                                    fieldName='banner'
                                    disabled={isSubmitting}
                                    setFile={handleSetBannerFile}
                                    hidden={true}
                                />         

                                <button className="button button-crimson submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Đang tải...' : (type == 'edit' ? 'Sửa' : 'Thêm')}</button> 
                            </form>
                        )
                    }}
                </Formik>
            </div>
        </LoadingSpinner>
    );
}

export default AddEditForm;