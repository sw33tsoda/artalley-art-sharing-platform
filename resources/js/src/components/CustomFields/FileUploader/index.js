import React, { useState } from 'react'
import PropTypes from 'prop-types';

FileUploader.propTypes = {
    form:   PropTypes.object.isRequired,
    field:  PropTypes.object.isRequired,

    label:  PropTypes.string,
    labelClassName: PropTypes.string,
    className:  PropTypes.string,
    disabled:   PropTypes.bool,
    setFile: PropTypes.func.isRequired,
    hidden: PropTypes.bool,
}

FileUploader.defaultProps = {
    label:  '',
    labelClassName: 'label',
    className:  'file-input',
    disabled:   false,
    setFile:    null,
    hidden: false,
}


function FileUploader(props) {
    const { form,hidden,field,label,labelClassName,className,disabled,setFile,setFieldValue } = props;
    const { name } = field;

    const handleSetFile = (event) => {
        const file = event.target.files[0];
        setFile(file);
        setFieldValue('art',{tes:'worked'});
    }

    ///////////////////// fixx

    return (
        <div className="form-group">
            {label && <label className={labelClassName}>{label}</label>}
            <br></br>
            {label && <div className="upload-button">
                <label htmlFor={name}>TẢI LÊN</label>
            </div>}
            <input
                name={name}
                id={name}
                {...field}
                className={className}
                disabled={disabled}
                type='file'
                onChange={handleSetFile}
                hidden={hidden}
            />
        </div>
    );
}

export default FileUploader;
