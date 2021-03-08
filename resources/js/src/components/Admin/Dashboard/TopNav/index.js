import React from 'react';
import { useSelector } from 'react-redux';

function TopNav({setSideBarToggle}) {
    const user = useSelector(state => state.auth.authenticatedUser);
    return (
        <div className="top-nav">
            <div className="flex-box">
                <div className="title">
                    <h1>QUẢN TRỊ</h1>
                </div>
            </div>

            <div className="flex-box">
                <div className="control">
                    <div className="admin-info">
                        <div className="username">
                            <p>{user.username}</p>
                        </div>

                        <div className="profile-picture">
                            <img src={`/storage/app/public/profilePictures/${user.profile_picture}`}/>
                        </div>
                    </div>
                    <div className="sidebar-toggle">
                        <div className="toggle-button" onClick={setSideBarToggle}>
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;