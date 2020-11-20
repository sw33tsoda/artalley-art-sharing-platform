import React from 'react';
import PropTypes from 'prop-types';

AlertModal.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    closeModal: PropTypes.func,
    submit: PropTypes.func,
    // userInfo: PropTypes.object,
}

AlertModal.defaultProps = {
    title: 'untitled',
    body: 'no description',
    closeModal: null,
    submit: null,
    // userInfo: {},
}


function AlertModal(props) {
    const { title, body, closeModal, submit } = props;

    return (
        <div className="alert-modal">
            <div className="header">
                <p>{title}</p>
            </div>
            <div className="body">
                <p>{body}</p>
            </div>
            <div className="footer">
                <button onClick={submit}>Chấp nhận</button>
                <button onClick={closeModal}>Đóng</button>
            </div>
        </div>
    );
}

export default AlertModal;