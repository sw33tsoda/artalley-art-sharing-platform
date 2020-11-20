import React from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import CurrentPageSlug from '../../../../utilities/CurrentPageSlug';
import List from './List';

function User() {
    const match = useRouteMatch();
    const CurrentPageSlug = CurrentPageSlug;
    return (
        <div className="user">
            <div className="navbar">
                <div className="nav-item">
                    <Link className={`${CurrentPageSlug == 'list' && 'active'}`} to={`${match.url}/list`} style={{ textDecoration: 'none' }}>
                        DANH SÁCH
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className={`${CurrentPageSlug == 'add' && 'active'}`} to={`${match.url}/add`} style={{ textDecoration: 'none' }}>
                        THÊM NGƯỜI DÙNG
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className={`${CurrentPageSlug == 'role' && 'active'}`} to={`${match.url}/role`} style={{ textDecoration: 'none' }}>
                        ĐẶC QUYỀN
                    </Link>
                </div>
            </div>

            <div className="manager">
                <Switch>
                    <Redirect path={`${match.url}`} exact to={`${match.url}/list`} />
                    <Route path={`${match.url}/list`} component={List} />
                    <Route path={`${match.url}/add`} component={() => <h1>Add</h1>}>
                        
                    </Route>
                    <Route path={`${match.url}/role`} component={() => <h1>Role</h1>}>
                        
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default User;