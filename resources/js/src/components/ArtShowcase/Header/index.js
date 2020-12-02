import React from 'react';
import Navbar from '../Navbar';

function Header() {
    return (
        <div className="header" style={{backgroundImage:`url('/storage/app/public/web/header/background.jpg')`}}>
            <Navbar/>
        </div>
    );
}

export default Header;