import FileUploader from '../../../../../CustomFields/FileUploader';
import InputField from '../../../../../CustomFields/InputField';
import Axios from 'axios';
import React,{useState} from 'react'
import { FastField, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setAnnouncerMessage } from '../../../../../../store/admin/announcer';
import { ArtChannelValidaitonSchema } from '../../../../../Auth/Validation';

function AddEditForm(props) {
    const {listRefresh,formToggle,formType,channelInfo} = props;
    const initialValues = {
        channel_name : '',
        thumbnail : '',
    }

    if (!_.isEmpty(channelInfo)) {
        initialValues.channel_name = channelInfo.channel_name;
    }

    const dispatch = useDispatch();


    // Xử lý File
    const [file,setFile] = useState({});
    const [preview,setPreview] = useState((function() {
        if (_.isEmpty(channelInfo) || _.isNull(channelInfo.thumbnail)) {
            return ''; 
        }
        return '/storage/app/public/artChannelThumbnails/' + channelInfo.thumbnail;
    })());
    const resetFile = () => {
        setFile({});
        setPreview('');
    }

    if (!_.isEmpty(file.name)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreview(reader.result);
        }
    }

    const handleSetFile = (event) => {
        setFile(event.target.files[0]);
    }

    // Xử lý Form
    const handleSubmitForm = (values,{resetForm}) => {
        const apiToken = localStorage.getItem('authenticatedUserToken');
        const data = new FormData();
        data.append('channel_name',values.channel_name);
        if (!_.isEmpty(file.name)) {
            data.append('thumbnail',file);
        }
        (function () {
            if (formType == 'edit') {
                data.append('_method','PATCH');
                return Axios.post(`/public/api/admin/resources/art_channels/${channelInfo.id}?api_token=${apiToken}`,data)
            }
            return Axios.post(`/public/api/admin/resources/art_channels?api_token=${apiToken}`,data);
        })().then(response => {
            const {data:{message}} = response;
            dispatch(setAnnouncerMessage(message));
            resetForm();
            resetFile();
            formToggle(formType,'close');
            listRefresh();
        }).catch(error => {
            const {data:{errors,message}} = error.response;
            if (!_.isEmpty(errors)) {
                dispatch(setAnnouncerMessage(errors[Object.keys(errors)[0]]));
            } else {
                dispatch(setAnnouncerMessage(message));
            }
        });
    }

    return (
        <Formik validationSchema={ArtChannelValidaitonSchema} initialValues={initialValues} onSubmit={handleSubmitForm}>
            {({handleSubmit}) => {
                return (
                    <form onSubmit={handleSubmit}>

                        <FastField
                            name='channel_name'
                            component={InputField}

                            label='Tên thể loại'
                            labelClassName='label'
                            type='text'
                            placeholder='Nhập tên thể loại'
                            disabled={false}
                        />

                        <FastField
                            name='thumbnail'
                            component={FileUploader}

                            label='Ảnh đại diện'
                            labelClassName='label'
                            type='file'
                            disabled={false}
                            setFile={handleSetFile}
                        />

                        {preview !== '' ? <img className="profile-picture-preview" src={preview} width="35px"/> : <p className="no-file">Chưa có ảnh</p>}

                        <div className="form-buttons-group">
                        <button type="submit">{formType == 'add' ? 'THÊM' : 'SỬA'}</button><button onClick={() => formToggle(formType,'close')}>ĐÓNG</button>
                        </div>
                    </form>
                )
            }}
        </Formik>
    );
}

export default AddEditForm;