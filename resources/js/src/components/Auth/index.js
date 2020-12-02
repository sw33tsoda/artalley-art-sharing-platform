import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useRouteMatch } from 'react-router-dom';
import Axios from 'axios';
import { removeAuthenticatedUser } from './../../store/auth';
import _ from 'lodash';

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

            {/* USER INFO */}
            {!_.isEmpty(authenticatedUser) && (
                <React.Fragment>
                    <div className="user-info">
                        <p className="username">{authenticatedUser.username}</p>
                        <img className="profile-picture" src={`/storage/app/public/profilePictures/${authenticatedUser.profile_picture}`}/>
                    </div>
                </React.Fragment>
            )}
            

            {/* ADMIN */}
            {authenticatedUser.role == 'admin' && (
                <button className="button admin">
                    <Link to={`${match.url}admin`} style={{textDecoration:'none',color:'#D9D9D9'}}>Quản trị</Link>
                </button>
            )}

            {/* AUTH FORM */}
            {isRegister && (
                <Register  closeRegister={handleCloseRegister}/>
            )}

            {isLogin && (
                <Login closeLogin={handleCloseLogin}/>
            )}

            {/* BUTTONS */}
            {!_.isEmpty(authenticatedUser) ? (
                <button className="button" onClick={handleLogout}>Đăng xuất</button>
            ) : (
                <React.Fragment>
                    <button className="button" onClick={() => setIsRegister(!isRegister)}>Đăng ký</button>
                    <button className="button" onClick={() => setIsLogin(!isLogin)}>Đăng nhập</button>
                </React.Fragment>
            )}
        </div>
    );
}

export default Auth;