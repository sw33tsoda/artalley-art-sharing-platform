import React, { lazy, Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import store from './store';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { setAuthenticatedUser } from './store/auth';
import Utils from 'lodash';
import Warning from './components/Errors/Warning';
// import Community from './components/Community';
// import Admin from './components/Admin';
const Community = lazy(() => (import('./components/Community')));
const Admin = lazy(() => (import('./components/Admin')));

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
        <React.Fragment>
            <Router>
                <Suspense fallback={<h1>Đang tải...</h1>}>
                    <Switch>
                        {/* Redirect đến /community nếu đang ở parent route */}
                        <Route exact path="/public">
                            <Redirect to="/public/community"/>
                        </Route>

                        {/* Community */}
                        <Route path="/public/community" component={Community}/>

                        {/* Admin */}
                        <Route path="/public/admin" component={Admin}/>

                        {/* 404 */}
                        <Route>
                            <Warning warning="404" description="Trang này không tồn tại"/>
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        </React.Fragment>
    );
}


export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Provider store={store}><Main/></Provider>, document.getElementById('main'));
}
