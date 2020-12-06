import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../Auth';
import Search from './Search';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-items">
                <div className="left">
                    <Link to="/public" style={{textDecoration:'none'}}>
                        <p className="name"><span>ART</span>ALLEY</p>
                    </Link>
                </div>
                <div className="center">
                    <Search/>
                </div>
                <div className="right">
                    <Auth/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;