import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, useRouteMatch,Route, Redirect } from 'react-router-dom';
import User from './User';

function Content(props) {
    const {username,email,profile_picture,firstname,lastname} = useSelector(state => state.auth.authenticatedUser);
    const match = useRouteMatch();
    return (
        <div className="content">
            <div className="top-nav">
                <div className="admin-info">
                    <div className="info">
                        <p className="fullname">{lastname + ' ' + firstname}</p>
                    </div>
                    <div className="profile-picture" style={{
                        background:`url(https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg)`,
                    }}></div>
                </div>
            </div>
            <div className="resource">
                <Switch>
                    <Route path={`${match.url}/user`} component={User}></Route>
                    <Route path={`${match.url}/product`} component={null}></Route>
                    <Route path={`${match.url}/community`} component={null}></Route>
                </Switch>
            </div>
        </div>
    );
}

export default Content;