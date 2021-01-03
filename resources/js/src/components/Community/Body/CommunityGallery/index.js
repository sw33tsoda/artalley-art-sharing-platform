import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Header from './Header';
import Content from './Content';

function CommunityGallery() {
    return (
        <div className="community-gallery">
            <div className="ads">
                <div className="ad">

                </div>
                <div className="ad">

                </div>
                <div className="ad">

                </div>
            </div>

            {/* Header */}
            <Header/>

            {/* Content */}
            <Content/>
        </div>
    );
}

export default CommunityGallery;