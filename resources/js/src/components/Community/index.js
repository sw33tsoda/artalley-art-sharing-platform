import React from 'react';
import Announcement from './Announcement';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

function Community() {
    return (
        <div className="community">
            <Announcement timeout={100}/>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Community;