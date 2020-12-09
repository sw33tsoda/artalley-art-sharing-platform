import { FastField, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import InputField from '../../../../CustomFields/InputField';
import FileUploader from '../../../../CustomFields/FileUploader';
import SelectField from '../../../../CustomFields/SelectField';
import TextareaField from '../../../../CustomFields/TextareaField';
import _, { debounce } from 'lodash';
import Axios from 'axios';
import classnames from 'classnames';
// import { useSelector } from 'react-redux';
import { SingleArtValidation } from '../../../../Validations';

const dimensionalOptions = [
    {label:'Chưa xác định',value:0},
    {label:'2D',value:1},
    {label:'2.5D',value:2},
    {label:'3D',value:3}
];

const privacyOptions = [
    {label:'Mọi người',value:1},
    {label:'Chỉ mình tôi',value:0}
];

function UploadSingleArt() {
    // Danh sách thẻ (tags)
    const [tags,setTags] = useState([]);
    // Tags Debounce
    const tagsDebounce = {
        callback: (value) => {
            const tagsList = value.split(',');
            setTags(tagsList);
        },
        ms:250,
    }

    // Danh sách kênh ảnh
    const [artChannelOptions,setArtChannelOptions] = useState([]);

    useEffect(() => {
        const getArtChannelsList = async () => {
            await Axios.get('/public/api/community/resources/art_channels/upload-select-list').then(response => {
                const {data:{list}} = response;
                // console.log(response);
                setArtChannelOptions(list);
            }).catch(error => {
                const {data:{list}} = error.response;
                // console.log(error.response);
            });
        }
        getArtChannelsList();
    },[]);

    const handleSubmitForm = async (values) => {
        const apiToken = localStorage.getItem('authenticatedUserToken');

        // Xử lý Data chuẩn bị gửi đi
        const data = new FormData();
        for (const key in values) {
            data.append(key,values[key]);
        }

        const newTags = values.tags.split(',').filter(tag => tag !== '').join(',');
        data.set('tags',newTags);
        
        // Gọi Api
        await Axios.post(`/public/api/community/resources/art_channels/upload-new-single-art?api_token=${apiToken}`,data).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error.response);
        });
    }

    const initialValues = {
        title:'',
        caption:'',
        description:'',
        dimensional:0,
        privacy:1,
        channel:0,
        tags:'',
        art:undefined,
    }


    // File Uplaod
    const [file,setFile] = useState([]);
    const handleSetFile = (selectedFile) => {
        const theFile = selectedFile;
        setFile(theFile);
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
                <Formik initialValues={initialValues} onSubmit={handleSubmitForm} validationSchema={SingleArtValidation}>
                    {({handleSubmit,errors,resetForm,isSubmitting}) => {
                        console.log(errors);
                        return (
                            isSubmitting ? (
                                <React.Fragment>
                                    <i className="fas fa-circle-notch fa-spin"></i>
                                </React.Fragment>
                            ) : (
                                <form className="form" onSubmit={handleSubmit}> 
                                    <div className={classnames('button-group',{hide: _.isEmpty(file.name) || !_.isEmpty(errors['art'])})}>
                                        <button className='submit button success' type="submit">{isSubmitting ? (
                                            <React.Fragment>
                                                <i className="fas fa-circle-notch fa-spin"></i>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <i className="fas fa-paper-plane"></i>
                                            </React.Fragment>
                                        )} </button>
                                        <button className='reset button light' onClick={resetForm}><i className="fas fa-undo"></i></button>
                                    </div>
                                    <div className={classnames('split',{hide: _.isEmpty(file.name) || !_.isEmpty(errors['art'])})}>
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
                                            <React.Fragment>
                                                {!_.isEmpty(errors['art']) ? (
                                                    <React.Fragment>
                                                        <p className="error">{errors['art']}</p>
                                                        <div className="icon">
                                                            <label htmlFor="art">
                                                                <i className="fas fa-upload"></i>
                                                                <p>Chọn File khác</p>
                                                            </label>
                                                        </div>
                                                    </React.Fragment>
                                                ) : <img className="preview-image" src={preview}/>}
                                            </React.Fragment>
                                        ) : (
                                            <div className="icon">
                                                <label htmlFor="art">
                                                    <i className="fas fa-upload"></i>
                                                    <p>Nhấn vào đây</p>
                                                </label>
                                            </div>
                                        )}
                                    </div>

                                    <div className={classnames('split',{hide: _.isEmpty(file.name) || !_.isEmpty(errors['art'])})}>
                                        <div className="description">
                                            <FastField
                                                name='description'
                                                component={TextareaField}

                                                label="Mô tả"
                                                labelClassName="label"
                                                className="text-input"
                                                disabled={false}
                                                placeholder="Nhập mô tả (không bắt buộc)"
                                                formErrorClass="form-error textarea-error"
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

                                            {artChannelOptions.length > 0 && <FastField
                                                name="channel"
                                                component={SelectField}

                                                label="Kênh ảnh"
                                                labelClassName="label"
                                                className="text-input"
                                                disabled={false}
                                                options={artChannelOptions}
                                            />}
                                        </div>
                                    </div>

                                    <div className={classnames('split',{hide: _.isEmpty(file.name) || !_.isEmpty(errors['art'])})}>
                                        
                                        <FastField
                                            name='privacy'
                                            component={SelectField}

                                            label="Ai có thể xem?"
                                            labelClassName="label"
                                            className="text-input"
                                            disabled={false}
                                            options={privacyOptions}
                                        />

                                        
                                        
                                        <div>
                                            <FastField
                                                name="tags"
                                                component={InputField}

                                                label="Thẻ"
                                                labelClassName="label"
                                                className="text-input"
                                                disabled={false}
                                                placeholder="Nhập thẻ"
                                                debounce={tagsDebounce}
                                            />

                                            <legend className="tags">
                                                <small className="caption"><span>Chú thích</span> Sử dụng thẻ để tăng sự tương tác giữa tác phẩm với người xem</small>

                                                <small className="tags-list">{tags[0] !== '' ? tags.map((tag,index) => tag !== '' && (
                                                    <div className="tag" key={index}>{tag}</div>
                                                )) : 'Chưa có thẻ nào.'}</small>
                                            </legend>
                                        </div>
                                    </div>


                                    <FastField
                                        name='file'
                                        component={FileUploader}
                                        
                                        fieldName='art'
                                        disabled={false}
                                        setFile={handleSetFile}
                                        hidden={true}
                                    />
                                </form>
                            )
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default UploadSingleArt;