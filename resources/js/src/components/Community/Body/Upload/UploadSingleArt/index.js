import { FastField, Formik } from 'formik';
import React, { useState } from 'react';
import InputField from '../../../../CustomFields/InputField';
import FileUploader from '../../../../CustomFields/FileUploader';
import SelectField from '../../../../CustomFields/SelectField';
import TextareaField from '../../../../CustomFields/TextareaField';
import _ from 'lodash';

const dimensionalOptions = [
    {label:'2D',value:1},
    {label:'2.5D',value:2},
    {label:'3D',value:3}
];

const privacyOptions = [
    {label:'Mọi người',value:1},
    {label:'Chỉ mình tôi',value:0}
];

function UploadSingleArt() {
    const initialValues = {
        title:'',
        caption:'',
        description:'',
        dimensional:'',
        privacy:'',
        channel:'',
        tags:'',
        art:'',
    }

    // File Uplaod
    const [file,setFile] = useState([]);
    const handleSetFile = (event) => {
        const chosenFile = event.target.files[0];
        setFile(chosenFile);
    }
    
    // File Preview
    const [preview,setPreview] = useState('');
    if (!_.isEmpty(file.name)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreview(reader.result);
        };
    }

    return (
        <div className="upload-single-art">
            <h1 className="title">Tác phẩm đơn</h1>
            <div className="upload-form">
                <Formik initialValues={initialValues}>
                    {({handleSubmit}) => {
                        return (
                            <form className="form" onSubmit={handleSubmit}>
                                
                                <div className="split" style={{display: !_.isEmpty(file.name) ? 'grid' : 'none'}}>
                                    <FastField
                                        name="title"
                                        component={InputField}

                                        label="Tiêu đề"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        placeholder="Nhập tiêu đề" 
                                    />

                                    <FastField
                                        name="caption"
                                        component={InputField}

                                        label="Chú thích"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        placeholder="Nhập chú thích" 
                                    />
                                </div>

                                <div className="upload-image">
                                    {!_.isEmpty(file.name) ? (
                                        <img className="preview-image" src={preview}/>
                                    ) : (
                                        <div className="icon">
                                            <label htmlFor="art">
                                                <i className="fas fa-upload"></i>
                                                <p>Nhấn vào đây</p>
                                            </label>
                                        </div>
                                    )}
                                </div>

                                <div className="split" style={{display: !_.isEmpty(file.name) ? 'grid' : 'none'}}>
                                    <div className="description">
                                        <FastField
                                            name='description'
                                            component={TextareaField}

                                            label="Mô tả"
                                            labelClassName="label"
                                            className="text-input"
                                            disabled={false}
                                            placeholder="Nhập mô tả (không bắt buộc)"
                                        />
                                    </div>
                                    <div className="privacy-and-dimensional">
                                        <FastField
                                            name='dimensional'
                                            component={SelectField}

                                            label="Không gian"
                                            labelClassName="label"
                                            className="text-input"
                                            disabled={false}
                                            options={dimensionalOptions}
                                        />

                                        <FastField
                                            name="channel"
                                            component={SelectField}

                                            label="Kênh ảnh"
                                            labelClassName="label"
                                            className="text-input"
                                            disabled={false}
                                        />
                                    </div>
                                </div>

                                <div className="split" style={{display: !_.isEmpty(file.name) ? 'grid' : 'none'}}>
                                    
                                    <FastField
                                        name='privacy'
                                        component={SelectField}

                                        label="Ai có thể xem?"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        options={privacyOptions}
                                    />
                                    <FastField
                                        name="tags"
                                        component={InputField}

                                        label="Thẻ"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        placeholder="Nhập thẻ" 
                                    />
                                </div>


                                <FastField
                                    name='art'
                                    component={FileUploader}

                                    type='file'
                                    disabled={false}
                                    setFile={handleSetFile}
                                    hidden={true}
                                />
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default UploadSingleArt;