import React, { useState } from 'react'
import PropTypes from 'prop-types';

FileUploader.propTypes = {
    form:   PropTypes.object.isRequired,
    field:  PropTypes.object.isRequired,

    label:  PropTypes.string,
    labelClassName: PropTypes.string,
    className:  PropTypes.string,
    disabled:   PropTypes.bool,
    setFile: PropTypes.func,
    hidden: PropTypes.bool,
    fieldName: PropTypes.string.isRequired,
}

FileUploader.defaultProps = {
    label:  '',
    labelClassName: 'label',
    className:  'file-input',
    disabled:   false,
    setFile:    null,
    hidden: false,
    fieldName: '',
}


function FileUploader(props) {
    const { form,hidden,field,label,labelClassName,className,disabled,setFile,fieldName} = props;
    // const { name } = field;

    const handleSetFile = (event) => {
        const file = event.target.files[0];
        setFile(file);
        form.setFieldValue(fieldName,file);
    }

    return (
        <div className="form-group" hidden={hidden}>
            {label && <label className={labelClassName}>{label}</label>}
            <br></br>
            {label && <div className="upload-button">
                <label htmlFor={fieldName}>TẢI LÊN</label>
            </div>}
            <input
                name={fieldName}
                id={fieldName}
                {...field}
                className={className}
                disabled={disabled}
                type='file'
                onChange={handleSetFile}
            />
        </div>
    );
}

export default FileUploader;
