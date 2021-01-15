import React from 'react';
import PropTypes from 'prop-types';

TextareaField.propTypes = {
    form:   PropTypes.object.isRequired,
    field:  PropTypes.object.isRequired,

    label:  PropTypes.string,
    labelClassName: PropTypes.string,
    placeholder:    PropTypes.string,
    className:  PropTypes.string,
    disabled:   PropTypes.bool,
    formErrorClass: PropTypes.string,
    showError: PropTypes.bool,
    // ref: PropTypes.object,
}

TextareaField.defaultProps = {
    label:  '',
    labelClassName: 'label',
    placeholder:    '',
    className:  'text-input',
    disabled:   false,
    formErrorClass: 'form-error',
    showError: true,
    // ref:null,
}

function TextareaField(props) {
    const {form,field,label,labelClassName,placeholder,className,disabled,formErrorClass,showError} = props;
    const {name} = field;
    const {errors,touched} = form;
    const hasError = errors[name] && touched[name];

    return (
        <div className="form-group">
            {label && <label className={labelClassName}>{label}</label>}
            <textarea
                name={name}
                id={name}
                {...field}
                className={className}
                placeholder={placeholder}
                disabled={disabled}
                // ref={ref}
            />
            {(hasError && showError) && <small className={formErrorClass}>{errors[name]}</small>}
        </div>
    );
}

export default TextareaField;
