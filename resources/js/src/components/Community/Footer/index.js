import React from 'react';

const storage_path = '/storage/app/public/web/header';
const style = {
    footerBackground: {
        backgroundImage: `linear-gradient(180deg, rgba(216,216,216,1) 0%, rgba(216,216,216,1) 35%, rgba(0,212,255,0) 100%),url('https://artisticfuel.com/wp-content/uploads/2019/11/IMG_9393-scaled-2-1536x1024.jpg')`,
    },
}

function Footer() {
    return (
        <div className="footer" style={style.footerBackground}>
            <div className="content">

            </div>
        </div>
    );
}

export default Footer;