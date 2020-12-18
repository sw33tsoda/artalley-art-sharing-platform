import { FastField, Formik } from 'formik';
import React from 'react';
import InputField from '../../../../CustomFields/InputField';
import TextareaField from '../../../../CustomFields/TextareaField';

function CreateShowcase() {
    const initialValues = {
        title:'',
        subheading:'',
        description:'',
        privacy_id:1,
        channel:1,
    }

    return (
        <div className="create-showcase">
            <h1 className="title">Tạo quầy trưng bầy</h1>
            <div className="showcase-form">
                <Formik initialValues={initialValues}>
                    {({handleSubmit}) => {
                        return (
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="split">
                                    <FastField
                                        name="title"
                                        component={InputField}

                                        label="Tiêu đề"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        placeholder="Tiêu đề" 
                                    />
                                    <FastField
                                        name="subheading"
                                        component={InputField}

                                        label="Tiêu đề phụ"
                                        labelClassName="label"
                                        className="text-input"
                                        disabled={false}
                                        placeholder="Tiêu đề phụ" 
                                    />
                                </div>

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
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default CreateShowcase;