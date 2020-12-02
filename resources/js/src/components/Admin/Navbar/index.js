import React, { useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
// import CurrentPageSlug from '../../../utilities/CurrentPageSlug';
// import Stats from './Stats';

function Navbar(props) {
    const {toggle,hideNavbar} = props;
    const history = useHistory();
    const match = useRouteMatch();
    const [resourceToggle,setResourceToggle] = useState({
        current:    '',
        user:       false,
        product:    false,
        community:  false,
    });

    const handleResourceToggle = async (resource_name) => {
        const newState = resourceToggle;
        newState['current'] = resource_name;
        setResourceToggle({...newState});
        hideNavbar();
    }

    return (
        <div className="navbar" style={{display: toggle ? 'block' : 'none'}}>
            <div className="panel">
                <div className="header">
                    {/* <h1 className="title">QUẢN TRỊ</h1> */}
                </div>

                <div className="resources">
                    <div className="resource" >
                        <Link to={`${match.url}/user`} style={{ textDecoration: 'none' }}>
                            <h2 className={`resource-name ${resourceToggle.current == 'user' && 'active'}`} onClick={() => handleResourceToggle('user')}>
                                NGƯỜI DÙNG
                            </h2>
                        </Link>
                        
                        {/* {resourceToggle.user && <Stats/>} */}
                    </div>
                    <div className="resource" >
                        <Link to={`${match.url}/art`} style={{ textDecoration: 'none' }}>
                            <h2 className={`resource-name ${resourceToggle.current == 'product' && 'active'}`} onClick={() => handleResourceToggle('product')}>
                                ẢNH
                            </h2>
                        </Link>
                        {/* {resourceToggle.product && <Stats/>} */}
                    </div>
                    {/* <div className="resource" >
                        <Link to={`${match.url}/community`} style={{ textDecoration: 'none' }}>
                        <h2 className={`resource-name ${resourceToggle.current == 'community' && 'active'}`} onClick={() => handleResourceToggle('community')}>
                        CỘNG ĐỒNG
                        </h2>
                        </Link>
                    </div> */}
                    <a href="# " className="back-to-main-page" onClick={() => history.push('/public/')}>Trở về trang chính</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;