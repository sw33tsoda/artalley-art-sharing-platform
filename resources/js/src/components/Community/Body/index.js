import React, { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Warning from '../../Errors/Warning';

const CommunityGallery = lazy(() => (import('./CommunityGallery')));
const Upload = lazy(() => (import('./Upload')));

function Body() {
    const { url } = useRouteMatch();
    return (
        <div className="body">
            <Suspense fallback={<h1>Đang tải...</h1>}>
                <Switch>
                    {/* Community Gallery */}
                    <Route exact path={url} component={CommunityGallery} />

                    {/* Upload */}
                    <Route path={url + '/upload'} component={Upload} />

                    {/* 404 */}
                    <Route>
                        <Warning warning="404" description="Trang này không tồn tại"/>
                    </Route>
                </Switch>
            </Suspense>
        </div>
    );
}

export default Body;