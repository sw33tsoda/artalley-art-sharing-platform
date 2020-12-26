import React, { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CurrentPageSlug from '../../../utilities/CurrentPageSlug';
import Warning from '../../Errors/Warning';
import Management from './Management';
import ShowArt from './ShowArt';
import Showcase from './Showcase';
import UserProfile from './UserProfile';

const CommunityGallery = lazy(() => (import('./CommunityGallery')));
const Upload = lazy(() => (import('./Upload')));

const style = {
    bodyHeight: {
        minHeight:'calc(100vh - 575px)',
    }
};

function Body() {
    const { url } = useRouteMatch();
    const pagesWithCustomHeight = ['management','upload','upload-single-art'];
    return (
        <div className="body" style={pagesWithCustomHeight.includes(CurrentPageSlug()) ? style.bodyHeight : null}>
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

                    {/* Show Showcase / Hiển thị quày trưng bày */}
                    <Route path={url + '/showcase/:id'} component={Showcase}/>

                    {/* Show User / Hiển thị người dùng */}
                    <Route path={url + '/user/:id'} component={UserProfile}/>

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