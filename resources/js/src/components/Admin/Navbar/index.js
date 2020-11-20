import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import CurrentPageSlug from '../../../utilities/CurrentPageSlug';
import Stats from './Stats';

function Navbar() {
    const match = useRouteMatch();
    const CurrentPageSlug = CurrentPageSlug;

    const [resourceToggle,setResourceToggle] = useState({
        user:       false,
        product:    false,
        community:  false,
    });

    const handleResourceStatsToggle = async (resource_name) => {
        const stateChanges = resourceToggle;
        stateChanges[resource_name] = !stateChanges[resource_name];
        setResourceToggle({...stateChanges});
    }

    return (
        <div className="navbar">
            <div className="panel">
                <div className="header">
                    <h1 className="title">QUẢN TRỊ</h1>
                </div>

                <div className="resources">
                    <div className="resource-control" >
                        <Link to={`${match.url}/user`} style={{ textDecoration: 'none' }}>
                            <h2 className={`resource-name ${CurrentPageSlug == 'user' && 'active'}`} onClick={() => handleResourceStatsToggle('user')}>
                                NGƯỜI DÙNG
                            </h2>
                        </Link>
                        
                        {resourceToggle.user && <Stats/>}
                    </div>
                    <div className="resource-control" >
                        <Link to={`${match.url}/product`} style={{ textDecoration: 'none' }}>
                            <h2 className={`resource-name ${CurrentPageSlug == 'product' && 'active'}`} onClick={() => handleResourceStatsToggle('product')}>
                                SẢN PHẨM
                            </h2>
                        </Link>
                        {resourceToggle.product && <Stats/>}
                    </div>
                    <div className="resource-control" >
                        <Link to={`${match.url}/community`} style={{ textDecoration: 'none' }}>
                            <h2 className={`resource-name ${CurrentPageSlug == 'community' && 'active'}`} onClick={() => handleResourceStatsToggle('community')}>
                                CỘNG ĐỒNG
                            </h2>
                        </Link>
                        {resourceToggle.community && <Stats/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;