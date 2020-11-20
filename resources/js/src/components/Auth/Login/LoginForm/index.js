import { FastField, Formik } from 'formik';
import React from 'react';
import InputField from '../../../CustomFields/InputField';
import { LoginValidationSchema } from '../../Validation';

function LoginForm(props) {
    const { handleLoginOnSubmit } = props;
    const validationSchema = LoginValidationSchema;

    const initialValues = {
        email:'',
        password:'',
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLoginOnSubmit}>
            {({handleSubmit}) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <FastField
                            name='email'
                            component={InputField}

                            label='Địa chỉ Email'
                            labelClassName='label'
                            placeholder='Nhập địa chỉ Email đăng nhập'
                            className='text-input mt1'
                            type='text'
                            disabled={false}
                        />

                        <FastField
                            name='password'
                            component={InputField}

                            label='Mật khẩu'
                            labelClassName='label'
                            placeholder='Nhập mật khẩu đăng nhập'
                            className='text-input mt1'
                            type='password'
                            disabled={false}
                        />

                        <button type="submit" className="button form-button mt1 success">ĐĂNG NHẬP</button>
                    </form>
                )
            }}
        </Formik>
    );
}

export default LoginForm;