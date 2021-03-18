import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { closeConfirmationBox } from '../../../store/admin/confirmation_box';



function ConfirmationBox() {
    const dispatch = useDispatch();
    const { title, description, callback } = useSelector(state => state.admin_confirmation_box);

    const handleSubmit = () => {
        callback();
        dispatch(closeConfirmationBox());
    }

    const close = () => {
        dispatch(closeConfirmationBox());
    }
    
    return (
        <div className="confirmation-box-wrapper">
            <div className="confirmation-box">
                <div className="header">
                    <p className="title">{title}</p>
                </div>
                <div className="content">
                    <p className="description">{description}</p>
                </div>
                <div className="footer">
                    <button className="button" onClick={close}>
                        Hủy
                    </button>
                    <button className="button" onClick={handleSubmit}>
                        Chấp nhận
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationBox;