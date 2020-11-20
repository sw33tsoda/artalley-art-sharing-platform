import React from 'react';
import { useSelector } from 'react-redux';
import Warning from '../Errors/Warning';
import Navbar from './Navbar';
import Content from './Content';
import Announcer from './Announcer';

function Admin() {
    const authenticatedUser = useSelector(state => state.auth.authenticatedUser);
    
    if (authenticatedUser.role !== 'admin') {
        return (
            <Warning warning="BẠN LẠC ĐƯỜNG?" description="Đây là khu vực dành riêng cho ban quản trị"/>
        )
    }
    
    return (
        <div className="admin">
            <Announcer/>
            <Navbar/>
            <Content/>
        </div>
    )
}

export default Admin;