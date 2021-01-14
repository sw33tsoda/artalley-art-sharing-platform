import React from 'react';
import PropTypes from 'prop-types';

InputField.propTypes = {
    form:   PropTypes.object.isRequired,
    field:  PropTypes.object.isRequired,

    label:  PropTypes.string,
    labelClassName: PropTypes.string,
    placeholder:    PropTypes.string,
    className:  PropTypes.string,
    disabled:   PropTypes.bool,
    type:   PropTypes.string,
    debounce: PropTypes.object,
}

InputField.defaultProps = {
    label:  '',
    labelClassName: 'label',
    placeholder:    '',
    className:  'text-input',
    disabled:   false,
    type:   'text',
    debounce: null,
}

let debounceTimeout = null;
function InputField(props) {
    const {form,field,label,labelClassName,placeholder,className,disabled,type,debounce} = props;
    const {name} = field;
    const {errors,touched} = form;
    const hasError = errors[name] && touched[name];

    if (debounce !== null) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => debounce.callback(field.value),debounce.ms);
    }

    return (
        <div className="form-group">
            {label && <label className={labelClassName}>{label}</label>}
            <input
                name={name}
                id={name}
                {...field}
                className={className}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
            />
            {hasError && <small className="form-error">{errors[name]}</small>}
        </div>
    );
}

export default InputField;
