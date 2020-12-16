import React from 'react';

const storage_path = '/storage/app/public/web/header';
const style = {
    footerBackground: {
        backgroundImage: `linear-gradient(180deg, rgba(216,216,216,1) 0%, rgba(216,216,216,1) 35%, rgba(0,212,255,0) 100%),url('${storage_path}/background.jpg')`,
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