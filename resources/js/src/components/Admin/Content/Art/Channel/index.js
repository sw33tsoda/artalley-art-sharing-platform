import Axios from 'axios';
import { FastField, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ArtChannelValidaitonSchema } from '../../../../Auth/Validation';
import FileUploader from '../../../../CustomFields/FileUploader';
import InputField from '../../../../CustomFields/InputField';
import _, { set } from 'lodash';

function Channel() {
    // const [channels,setChannels] = useState([]);

    // useEffect(() => {
    //     const getChannelsList = async () => {
    //         const apiToken = localStorage.getItem('authenticatedUserToken');
    
    //         Axios.get(`/public/api/admin/resources/art_channels?api_token=${apiToken}`).then(response => {
    //             console.log(response);
    //         }).catch(error => {
    //             console.log(error);
    //         });
    //     }
    
    //     getChannelsList();
    // },[]);

    const initialValues = {
        channel_name : '',
        thumbnail : '',
    }

    const [file,setFile] = useState({});
    const [preview,setPreview] = useState('');

    if (!_.isEmpty(file.name)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreview(reader.result);
        }
    }

    const handleSetFile = async (event) => {
        setFile(event.target.files[0]);
    }

    const handleSubmitForm = async (values) => {
        console.log(file);
        const apiToken = localStorage.getItem('authenticatedUserToken');
        const data = new FormData();
        data.append('channel_name',values.channel_name);
        data.append('thumbnail',file);
        Axios.post(`/public/api/admin/resources/art_channels?api_token=${apiToken}`,data).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error.response);
        });
    }

    return (
        <div className="channel">
            <div className="admin-form art-channel">
                <Formik validationSchema={ArtChannelValidaitonSchema} initialValues={initialValues} onSubmit={handleSubmitForm}>
                    {({handleSubmit,values}) => {
                        console.log(values);
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
                                    <button type="submit">Thêm</button>
                                </div>
                            </form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default Channel;