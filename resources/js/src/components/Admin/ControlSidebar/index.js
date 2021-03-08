import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

function ControlSidebar({sideBarToggle,setSideBarToggle}) {
    
    return (
        <div className={classnames('control-sidebar',{sidebar_hidden: !sideBarToggle})}>
            <div className="header">
                <div className="title">
                    <h1>
                        QUẢN TRỊ
                    </h1>
                </div>
                <div className="sidebar-toggle">
                    <div className="toggle-button" onClick={setSideBarToggle}>
                        <i className="fas fa-caret-square-left"></i>
                    </div>
                </div>
            </div>

            <div className="body">
                <div className="resources">
                    <Link to="/public/admin/users">
                        <div className="control">
                            <div className="name">
                                <i className="fas fa-users"></i><p>NGƯỜI DÙNG</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="control">
                            <div className="name">
                                <i className="fas fa-image"></i><p>TÁC PHẨM</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="control">
                            <div className="name">
                                <i className="fas fa-images"></i><p>QUÀY TRƯNG BÀY</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="control">
                            <div className="name">
                                <i className="fas fa-comments"></i><p>BÌNH LUẬN</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="control">
                            <div className="name">
                                <i className="fas fa-clone"></i><p>BÀI VIẾT</p>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default ControlSidebar;