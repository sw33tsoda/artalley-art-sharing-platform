import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
// import AddEditForm from './List/AddEditForm';
import List from './List';

function Users() {
    const { url } = useRouteMatch();
    return (
        <div className="users">
            <div className="controls">
                <div className="flex-box">
                    <Link to={url + '/list'}>
                        <button className="button button-crimson">
                            <i className="fas fa-list"></i> Danh sách
                        </button>
                    </Link>
                </div>
                <div className="flex-box">
                    <Link to={url + '/list/add'}>
                        <button className="button button-crimson">
                            <i className="fas fa-plus"></i> Thêm
                        </button>
                    </Link>
                </div>
            </div>

            <Switch>
                <Route path={url + '/list'}>
                    <List/>
                </Route>
            </Switch>
        </div>
    );
}

export default Users;