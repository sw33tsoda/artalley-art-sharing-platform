import React from 'react';
import PropTypes from 'prop-types';

SelectField.propTypes = {
    form:   PropTypes.object.isRequired,
    field:  PropTypes.object.isRequired,

    label:  PropTypes.string,
    labelClassName: PropTypes.string,
    placeholder:    PropTypes.string,
    className:  PropTypes.string,
    disabled:   PropTypes.bool,
    options: PropTypes.array,
    defaultValue: PropTypes.string,
}

SelectField.defaultProps = {
    label:  '',
    labelClassName: 'label',
    placeholder:    '',
    className:  'select-input',
    disabled:   false,
    options: [],
    defaultValue: 'user',
}

function SelectField(props) {
    const {form,field,label,labelClassName,placeholder,className,disabled,type,options} = props;
    const {name} = field;
    // const {errors,touched} = form;
    // const hasError = errors[name] && touched[name];

    return (
        <div className="form-group">
            {label && <label className={labelClassName}>{label}</label>}
            <br></br>
            <select
                name={name}
                id={name}
                {...field}
                className={className}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
            >
                {options.map((option,index) => <option key={index} value={option.value}>{option.label}</option>)}
            </select>
        </div>
    );
}

export default SelectField;
