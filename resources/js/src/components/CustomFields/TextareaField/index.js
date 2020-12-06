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
}

TextareaField.defaultProps = {
    label:  '',
    labelClassName: 'label',
    placeholder:    '',
    className:  'text-input',
    disabled:   false,

}

function TextareaField(props) {
    const {form,field,label,labelClassName,placeholder,className,disabled,rows,cols} = props;
    const {name} = field;
    const {errors,touched} = form;
    const hasError = errors[name] && touched[name];

    return (
        <div className="form-group mb1">
            {label && <label className={labelClassName}>{label}</label>}
            <textarea
                name={name}
                id={name}
                {...field}
                className={className}
                placeholder={placeholder}
                disabled={disabled}
            />
            {hasError && <small className="form-error">{errors[name]}</small>}
        </div>
    );
}

export default TextareaField;
