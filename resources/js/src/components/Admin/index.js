import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Warning from '../Errors/Warning';
import Announcer from './Announcer';
import Dashboard from './Dashboard';
import ControlSidebar from './ControlSidebar';
import ConfirmationBox from './ConfirmationBox';

function Admin() {
    const authenticatedUser = useSelector(state => state.auth.authenticatedUser);
    const confirmationBoxToggle = useSelector(state => state.admin_confirmation_box.toggle);
    const [sideBarToggle,setSideBarToggle] = useState(false);

    if (authenticatedUser.role !== 'admin') {
        return (
            <Warning warning="BẠN LẠC ĐƯỜNG?" description="Đây là khu vực dành riêng cho ban quản trị"/>
        )
    }

    const handleSetSideBarToggle = () => {
        setSideBarToggle(!sideBarToggle);
    }
    
    return (
        <div className="admin">
            <Announcer/>
            <ControlSidebar sideBarToggle={sideBarToggle} setSideBarToggle={handleSetSideBarToggle}/>
            <Dashboard setSideBarToggle={handleSetSideBarToggle}/>
            {confirmationBoxToggle && <ConfirmationBox/>}
            {/* <Navbar toggle={navBarToggle} hideNavbar={() => setNavBarToggle(false)}/> */}
            {/* <Content/> */}
            {/* <div className="navbar-panel-toggle" onClick={() => setNavBarToggle(!navBarToggle)}>
                <p>{navBarToggle ? 'ĐÓNG' : 'MỞ'} ĐIỀU HƯỚNG</p>
            </div> */}
        </div>
    )
}

export default Admin;