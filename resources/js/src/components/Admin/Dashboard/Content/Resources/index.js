import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Users from './Users';

function Resources() {
    const { url } = useRouteMatch();
    return (
        <div className="resources">
            <Switch>
                <Route path={url + '/users'} component={Users}/>
            </Switch>
        </div>
    );
}

export default Resources;