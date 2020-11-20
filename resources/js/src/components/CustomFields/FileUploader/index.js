import React, { useState } from 'react'
import PropTypes from 'prop-types';

FileUploader.propTypes = {
    form:   PropTypes.object.isRequired,
    field:  PropTypes.object.isRequired,

    label:  PropTypes.string,
    labelClassName: PropTypes.string,
    className:  PropTypes.string,
    disabled:   PropTypes.bool,
    type:   PropTypes.string,
    setFile: PropTypes.func.isRequired,
}

FileUploader.defaultProps = {
    label:  '',
    labelClassName: 'label',
    className:  'file-input',
    disabled:   false,
    type:   'file',
    setFile:    null,
}


function FileUploader(props) {
    const { form,field,label,labelClassName,className,disabled,type,setFile } = props;
    const { name } = field;

    return (
        <div className="form-group">
            {label && <label className={labelClassName}>{label}</label>}
            <br></br>
            <div className="upload-button">
                <label htmlFor={name}>TẢI LÊN</label>
            </div>
            <input
                name={name}
                id={name}
                {...field}
                className={className}
                disabled={disabled}
                type={type}
                onChange={setFile}
                hidden={true}
            />
        </div>
    );
}

export default FileUploader;
