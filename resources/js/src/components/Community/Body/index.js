import React, { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Warning from '../../Errors/Warning';
import Management from './Management';
import ShowArt from './ShowArt';

const CommunityGallery = lazy(() => (import('./CommunityGallery')));
const Upload = lazy(() => (import('./Upload')));


const storage_path = '/storage/app/public/web/body';
const style = {
    bodyBackground: {
        backgroundImage: `linear-gradient(black, black),url('${storage_path}/background_1.png')`,
    },
}

function Body() {
    const { url } = useRouteMatch();
    return (
        <div className="body">
            <Suspense fallback={<h1>Đang tải...</h1>}>
                <Switch>
                    {/* Community Gallery / Cộng đồng */}
                    <Route exact path={url} component={CommunityGallery} />

                    {/* Upload / Tải lên */}
                    <Route path={url + '/upload'} component={Upload} />

                    {/* Management / Quản lý */}
                    <Route path={url + '/management'} component={Management} />

                    {/* Show Art / Hiển thị tác phẩm */}
                    <Route path={url + '/art/:id'} component={ShowArt}/>

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