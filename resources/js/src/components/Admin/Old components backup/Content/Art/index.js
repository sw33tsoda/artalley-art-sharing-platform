import React from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import CurrentPageSlug from '../../../../utilities/CurrentPageSlug';
import Channel from './Channel';
import List from './List';

function Product() {
    const match = useRouteMatch();
    const PageSlug = CurrentPageSlug();
    return (
        <div className="control">
            <div className="navbar">
                <div className="nav-item">
                    <Link className={`${PageSlug == 'list' && 'active'}`} to={`${match.url}/list`} style={{ textDecoration: 'none' }}>
                        DANH SÁCH
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className={`${PageSlug == 'channel' && 'active'}`} to={`${match.url}/channel`} style={{ textDecoration: 'none' }}>
                        LOẠI ẢNH
                    </Link>
                </div>
                {/* <div className="nav-item">
                    <Link className={`${PageSlug == 'role' && 'active'}`} to={`${match.url}/role`} style={{ textDecoration: 'none' }}>
                        
                    </Link>
                </div> */}
            </div>

            <div className="manager">
                <Switch>
                    <Redirect path={`${match.url}`} exact to={`${match.url}/list`} />
                    <Route path={`${match.url}/list`} component={List} />
                    <Route path={`${match.url}/channel`} component={Channel} />
                    <Route path={`${match.url}/role`} component={() => <h1>Role</h1>} />
                </Switch>
            </div>
        </div>
    );
}

export default Product;