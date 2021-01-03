import React, { useState } from 'react';
import ChannelsListSlider from './ChannelsListSlider';
import TrendingArtsSlider from './TrendingArtsSlider';
import classnames from 'classnames';

function Header() {
    const [artsSlideType,setArtsSlideType] = useState('trending');
    return (
        <div className="header">
            <div className="navbar">
                <h1 className={classnames('nav-item',{active:artsSlideType == 'trending'})} onClick={() => setArtsSlideType('trending')}>XU HƯỚNG</h1>
                <h1 className={classnames('nav-item',{active:artsSlideType == 'latest'})} onClick={() => setArtsSlideType('latest')}>MỚI NHẤT</h1>
            </div>
            <div className="dash" style={{backgroundImage:`url(/storage/app/public/web/body/communityGallery/warning-dashline.png)`}}></div>

            {/* Danh sách mới nhất và trending */}
            <TrendingArtsSlider artsSlideType={artsSlideType}/>

            {/* Danh sách kênh */}
            <ChannelsListSlider/>
        </div>
    );
}

export default Header;