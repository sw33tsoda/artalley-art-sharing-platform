import { FastField, Formik } from 'formik';
import React from 'react';
import InputField from '../../../../CustomFields/InputField';

function CreateShowcase() {
    const initialValues = {
        title:'',
    }

    return (
        <div className="create-showcase">
            <Formik initialValues={initialValues}>
                {({handleSubmit}) => {
                    return (
                        <form className="form" onSubmit={handleSubmit}>
                            <FastField
                                name="title"
                                component={InputField}

                                label="Tiêu đề"
                                labelClassName="label"
                                className="text-input"
                                disabled={false}
                                placeholder="Tiêu đề" 
                            />
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default CreateShowcase;