import * as Yup from 'yup';

export const RegisterValidationSchema = Yup.object().shape({
    firstname:  Yup.string().min(2,'Tối thiểu hai ký tự').max(30,'Tên quá dài').required('Không được bỏ trống'),
    lastname:   Yup.string().min(2,'Tối thiểu hai ký tự').max(30,'Tên quá dài').required('Không được bỏ trống'),
    username:   Yup.string().min(2,'Tối thiểu hai ký tự').max(30,'Tên quá dài').required('Không được bỏ trống'),
    email:      Yup.string().email('Địa chỉ Email không hợp lệ').max(60,'Địa chỉ Email quá dài').required('Không được bỏ trống'),
    password:   Yup.string().min(8,'Tối thiểu tám ký tự').max(64,'Mật khẩu quá dài').required('Không được bỏ trống'),
    password_confirmation:  Yup.string().oneOf([Yup.ref('password'),null], 'Mật khẩu không giống nhau')
}); 

export const EditUserValidationSchema = Yup.object().shape({
    firstname:  Yup.string().min(2,'Tối thiểu hai ký tự').max(30,'Tên quá dài').required('Không được bỏ trống'),
    lastname:   Yup.string().min(2,'Tối thiểu hai ký tự').max(30,'Tên quá dài').required('Không được bỏ trống'),
    username:   Yup.string().min(2,'Tối thiểu hai ký tự').max(30,'Tên quá dài').required('Không được bỏ trống'),
    email:      Yup.string().email('Địa chỉ Email không hợp lệ').max(60,'Địa chỉ Email quá dài').required('Không được bỏ trống'),
    password:   Yup.string().min(8,'Tối thiểu tám ký tự').max(64,'Mật khẩu quá dài'),
    password_confirmation:  Yup.string().oneOf([Yup.ref('password'),null], 'Mật khẩu không giống nhau')
}); 

export const LoginValidationSchema = Yup.object().shape({
    email:      Yup.string().email('Địa chỉ Email không hợp lệ').max(60,'Địa chỉ Email quá dài').required('Không được bỏ trống'),
    password:   Yup.string().min(8,'Tối thiểu tám ký tự').max(64,'Mật khẩu quá dài').required('Không được bỏ trống'),
});

export const ArtChannelValidaitonSchema = Yup.object().shape({
    channel_name:   Yup.string().min(2,'Tối thiểu hai ký tự').max(60,'Tối đa 60 ký tự').required('Không được bỏ trống'),
});