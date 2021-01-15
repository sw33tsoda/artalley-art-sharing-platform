import * as Yup from 'yup';

const KILOBYTES = 1024;
const FILE_SIZE = KILOBYTES * 1024;
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
];

export const UserProfileValidation = Yup.object().shape({
    firstname:  Yup.string().min(2,'Tối thiểu hai ký tự').max(30,'Tên quá dài').required('Không được bỏ trống'),
    lastname:   Yup.string().min(2,'Tối thiểu hai ký tự').max(30,'Tên quá dài').required('Không được bỏ trống'),
    username:   Yup.string().min(2,'Tối thiểu hai ký tự').max(30,'Tên quá dài').required('Không được bỏ trống'),
    email:      Yup.string().email('Địa chỉ Email không hợp lệ').max(60,'Địa chỉ Email quá dài').required('Không được bỏ trống'),
    password:   Yup.string().min(8,'Tối thiểu tám ký tự').max(64,'Mật khẩu quá dài'),
    password_confirmation:  Yup.string().oneOf([Yup.ref('password'),null], 'Mật khẩu không giống nhau'),
    bio:        Yup.string().min(2,'Tối thiểu hai ký tự').max(500,'Tối đa 500 chữ'),
    twitter:    Yup.string().min(2,'Tối thiểu hai ký tự').max(64,'Tên quá dài'),
    facebook:   Yup.string().min(2,'Tối thiểu hai ký tự').max(64,'Tên quá dài'),
    profile_picture: Yup.mixed().nullable().test(
        "fileSize",
        "Kích thước quá lớn, tối đa 1MB",
        value => value ? (value && value.size <= FILE_SIZE) : true,
    ).test(
        "fileFormat",
        "Định dạng cho phép : JPG, JPEG",
        value => value ? (value && SUPPORTED_FORMATS.includes(value.type)) : true,
    ),
    banner:     Yup.mixed().nullable().test(
        "fileSize",
        "Kích thước quá lớn, tối đa 1MB",
        value => value ? (value && value.size <= FILE_SIZE) : true,
    ).test(
        "fileFormat",   
        "Định dạng cho phép : JPG, JPEG",
        value => value ? (value && SUPPORTED_FORMATS.includes(value.type)) : true,
    ),
});

export const SingleArtValidation = Yup.object().shape({
    title:  Yup.string().min(2,'Tối thiểu hai ký tự').max(100,'Tối đa 100 ký tự').required('Không được bỏ trống'),
    caption:   Yup.string().min(2,'Tối thiểu hai ký tự').max(120,'Tối đa 120 ký tự'),
    description:   Yup.string().min(2,'Tối thiểu hai ký tự').max(1000,'Tối đa 1000 ký tự'),
    dimensional:    Yup.number().required('Không được bỏ trống'),
    privacy:   Yup.number().required('Không được bỏ trống'),
    channel:  Yup.number().required('Không được bỏ trống'),
    art : Yup.mixed().required("Không có File").test(
        "fileSize",
        "Kích thước quá lớn, tối đa 1MB",
        value => value && value.size <= FILE_SIZE
    ).test(
        "fileFormat",
        "Định dạng cho phép : JPG, JPEG",
        value => value && SUPPORTED_FORMATS.includes(value.type)
    ),
    tags: Yup.string(),
});

export const EditArtValidation = Yup.object().shape({
    title:  Yup.string().min(2,'Tối thiểu hai ký tự').max(100,'Tối đa 100 ký tự').required('Không được bỏ trống'),
    caption:   Yup.string().min(2,'Tối thiểu hai ký tự').max(120,'Tối đa 120 ký tự').nullable(),
    description:   Yup.string().min(2,'Tối thiểu hai ký tự').max(1000,'Tối đa 1000 ký tự').nullable(),
    dimensional:    Yup.number().required('Không được bỏ trống'),
    privacy:   Yup.number().required('Không được bỏ trống'),
    channel:  Yup.number().required('Không được bỏ trống'),
    tags: Yup.string(),
}); 

export const ShowcaseValidation = Yup.object().shape({
    title: Yup.string().min(2,'Tối thiểu hai ký tự').max(100,'Tối đa 100 ký tự').required('Không được bỏ trống'),
    subheading:   Yup.string().min(2,'Tối thiểu hai ký tự').max(300,'Tối đa 300 ký tự'),
    description:   Yup.string().min(2,'Tối thiểu hai ký tự').max(1500,'Tối đa 1500 ký tự'),
    privacy:   Yup.number().required('Không được bỏ trống'),
    channel:  Yup.number().required('Không được bỏ trống'),
});

export const EditShowcaseValidation = Yup.object().shape({
    title: Yup.string().min(2,'Tối thiểu hai ký tự').max(100,'Tối đa 100 ký tự').required('Không được bỏ trống'),
    subheading:   Yup.string().min(2,'Tối thiểu hai ký tự').max(300,'Tối đa 300 ký tự').nullable(),
    description:   Yup.string().min(2,'Tối thiểu hai ký tự').max(1500,'Tối đa 1500 ký tự').nullable(),
    privacy:   Yup.number().required('Không được bỏ trống'),
    channel:  Yup.number().required('Không được bỏ trống'),
});

export const CommentValidation = Yup.object().shape({
    comment: Yup.string().min(2,'Tối thiểu hai ký tự').max(500,'Tối đa 500 ký tự').required('Không được bỏ trống'),
});

export const ReplyValidation = Yup.object().shape({
    reply: Yup.string().min(2,'Tối thiểu hai ký tự').max(500,'Tối đa 500 ký tự').required('Không được bỏ trống'),
});