import { FastField, Formik } from 'formik';
import React from 'react';
import InputField from '../../../CustomFields/InputField';
import { RegisterValidationSchema } from '../../Validation';

function RegisterForm(props) {
    const { isFinish,handleRegisterOnSubmit,formRef } = props;

    const initialValues = {
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:'',
        password_confirmation:'',
    }

    const validationSchema = RegisterValidationSchema;

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleRegisterOnSubmit} innerRef={formRef}>
            {({handleSubmit}) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <FastField
                            name='firstname'
                            component={InputField}
                            
                            label='Tên'
                            labelClassName='label'
                            placeholder='Tên của bạn?'
                            className='text-input mt1'
                            type='text'
                            disabled={false}
                        />

                        <FastField
                            name='lastname'
                            component={InputField}
                            
                            label='Họ'
                            labelClassName='label'
                            placeholder='Tên họ của bạn?'
                            className='text-input mt1'
                            type='text'
                            disabled={false}
                        />

                        <FastField
                            name='username'
                            component={InputField}
                            
                            label='Tên người dùng'
                            labelClassName='label'
                            placeholder='Tên người dùng sẽ là...'
                            className='text-input mt1'
                            type='text'
                            disabled={false}
                        />


                        <FastField
                            name='password'
                            component={InputField}
                            
                            label='Mật khẩu'
                            labelClassName='label'
                            placeholder='Mật khẩu'
                            className='text-input mt1'
                            type='password'
                            disabled={false}
                        />

                        <FastField
                            name='password_confirmation'
                            component={InputField}
                            
                            label='Xác nhận mật khẩu'
                            labelClassName='label'
                            placeholder='Điền lại mật khẩu'
                            className='text-input mt1'
                            type='password'
                            disabled={false}
                        />
                        
                        <FastField
                            name='email'
                            component={InputField}
                            
                            label='Địa chỉ Email'
                            labelClassName='label'
                            placeholder='example@example.com'
                            className='text-input mt1'
                            type='email'
                            disabled={false}
                        />
                        <button type="submit" className={`button form-button mt1 ${isFinish ? 'success' : 'danger'}`} disabled={!isFinish}>{isFinish ? 'HOÀN THÀNH' : 'XEM ĐIỀU KHOẢN'}</button>
                    </form>
                );
            }}
        </Formik>
    );
}

export default RegisterForm;