import React, { lazy, Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtShowcase from './components/ArtShowcase';
import Admin from './components/Admin';
import { setAuthenticatedUser } from './store/auth';
import Utils from 'lodash';
import Warning from './components/Errors/Warning';

function Main() {
    const authRefresh = useSelector(state => state.auth.sessionRefreshTimes);
    const dispatch = useDispatch();
    useEffect(() => {
        const apiToken = localStorage.getItem('authenticatedUserToken');
        if (!Utils.isEmpty(apiToken)) {
            const authCheck = async () => {
                const url = `/public/api/auth/check?api_token=${apiToken}`;
                Axios.post(url).then(response => {
                    const {data} = response;
                    const action = setAuthenticatedUser(data);
                    dispatch(action);
                }).catch(error => {
                    console.log(error);
                })
            }
            authCheck();
        }
    },[authRefresh]);

    return (
        <Router>
            <Switch>
                <Route path="/public" exact component={ArtShowcase}/>
                <Route path="/public/admin" component={Admin}/>
                <Route>
                    <Warning warning="404" description="Trang này không tồn tại"/>
                </Route>
            </Switch>
        </Router>
    );
}


export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Provider store={store}><Main/></Provider>, document.getElementById('main'));
}
