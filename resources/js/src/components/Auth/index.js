import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useRouteMatch } from 'react-router-dom';
import Axios from 'axios';
import { removeAuthenticatedUser } from './../../store/auth';

function Auth() {
    const authenticatedUser = useSelector(state => state.auth.authenticatedUser);
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const [isRegister,setIsRegister] = useState(false);
    const [isLogin,setIsLogin] = useState(false);

    const handleCloseRegister = async () => {
        await setIsRegister(false);
    }

    const handleCloseLogin = async () => {
        await setIsLogin(false);
    }

    const handleLogout = async () => {
        Axios.post(`/public/api/auth/logout?api_token=${authenticatedUser.api_token}`).then(response => {
            const {data:{login_status,message}} = response;
            if (login_status) {
                const action = removeAuthenticatedUser();
                dispatch(action);
                alert(message);
            }
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="auth">
            {isRegister && <Register  closeRegister={handleCloseRegister}/>}
            {isLogin && <Login closeLogin={handleCloseLogin}/>}
            <pre>
                {JSON.stringify(authenticatedUser,null,2)}
            </pre>
            <button className="button danger" onClick={() => setIsRegister(!isRegister)}>Đăng ký</button>
            <button className="button danger" onClick={() => setIsLogin(!isLogin)}>Đăng nhập</button>
            <button className="button danger" onClick={handleLogout}>Đăng xuất</button>
            {authenticatedUser.role == 'admin' && <button className="button danger"><Link to={`${match.url}admin`}>Quản trị</Link></button>}
        </div>
    );
}

export default Auth;