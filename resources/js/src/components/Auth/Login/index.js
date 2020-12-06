import Axios from 'axios';
import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { setAuthenticatedUser } from '../../../store/auth';
import { useDispatch } from 'react-redux';

Login.propTypes = {
    closeLogin: PropTypes.func.isRequired,
}

Login.defaultProps = {
    closeLogin: null,
}

function Login(props) {
    const {closeLogin} = props;
    const dispatch = useDispatch();
    const handleLoginOnSubmit = async (payload) => {
        const {
            email,
            password
        } = payload;

        Axios.post('/public/api/auth/login',{
            email:email,
            password:password,
        }).then(response => {
            const {data:{login_status,message,user_info}} = response;
            if (login_status == 1) {
                const action = setAuthenticatedUser(user_info);
                dispatch(action);
                alert(message);
                closeLogin();
            }
        }).catch(error => {
            const {data:{login_status,message}} = error.response;
            // console.log(error.response);
            if (login_status == 0) {
                alert(message);
            }
        });
    }
    return (
        <div className="login">
            <div className="form">
                <h1>ĐĂNG NHẬP</h1>
                <div className="login-close close" onClick={closeLogin}>Đóng</div>
                <LoginForm handleLoginOnSubmit={handleLoginOnSubmit}/>
            </div>
        </div>
    );
}

export default Login;