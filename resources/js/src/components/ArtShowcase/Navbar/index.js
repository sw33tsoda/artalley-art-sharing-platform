import React from 'react';
import Auth from '../../Auth';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-items">
                <div className="left">
                    <p className="name"><span>ART</span>ALLEY</p>
                </div>
                <div className="center">
                    <p className="search"><i class="fas fa-search"></i> TÌM KIẾM</p>
                </div>
                <div className="right">
                    <Auth/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;