import React, { lazy, Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import Axios from 'axios';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RetailStore from './components/RetailStore';
import Admin from './components/Admin';
import { setAuthenticatedUser } from './store/auth';
import Utils from 'lodash';
import Warning from './components/Errors/Warning';

function Main() {
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
    },[]);

    return (
        <Router>
            <Switch>
                <Route path="/public" exact component={RetailStore}/>
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
