import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Warning from '../Errors/Warning';
import Navbar from './Navbar';
import Content from './Content';
import Announcer from './Announcer';

function Admin() {
    const authenticatedUser = useSelector(state => state.auth.authenticatedUser);
    const [navBarToggle,setNavBarToggle] = useState(false);

    if (authenticatedUser.role !== 'admin') {
        return (
            <Warning warning="BẠN LẠC ĐƯỜNG?" description="Đây là khu vực dành riêng cho ban quản trị"/>
        )
    }
    
    return (
        <div className="admin">
            <Announcer/>
            <Navbar toggle={navBarToggle} hideNavbar={() => setNavBarToggle(false)}/>
            <Content/>
            <div className="navbar-panel-toggle" onClick={() => setNavBarToggle(!navBarToggle)}>
                <p>{navBarToggle ? 'ĐÓNG' : 'MỞ'} ĐIỀU HƯỚNG</p>
            </div>
        </div>
    )
}

export default Admin;