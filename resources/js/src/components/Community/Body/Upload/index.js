import React, { lazy, Suspense, useState } from 'react'
import { Route, Switch, Link, useRouteMatch, useHistory } from 'react-router-dom';
import classnames from 'classnames';
import CurrentPageSlug from '../../../../utilities/CurrentPageSlug';
const CreateShowcase = lazy(() => (import('./CreateShowcase')));
const UploadSingleArt = lazy(() => (import('./UploadSingleArt')));

const storage_path = '/storage/app/public/web/body/upload';
const style = {
    createShowcase: {
        backgroundImage: `url('${storage_path}/createShowcase/background.jpg')`,
    },
    uploadSingleArt: {
        backgroundImage: `url('${storage_path}/uploadSingleArt/background.jpg')`,
    }

}

function Upload() {
    const { url } = useRouteMatch();
    const history = useHistory();
    const [uploadType,setUploadType] = useState((function () {
        if (CurrentPageSlug() == 'upload-single-art') {
            return 'upload-single-art';
        }
        return 'create-showcase';
    })());
    // Xử lý thay đổi kiểu Upload
    const handleSelectUploadOption = (uploadType) => {
        const route = (uploadType == 'single-art') ? (url + '/upload-single-art') : url;
        const uploadTypeState = (uploadType == 'single-art') ? 'upload-single-art' : 'create-showcase';
        setUploadType(uploadTypeState);
        history.push(route);
    }

    return (
        <div className="upload">
            <h1 className="page-title">Upload</h1>
            {/* <p className="page-path">Quản lý / Upload tác phẩm</p> */}
            <div className="upload-options">
                <div className={classnames('option',{active : uploadType == 'create-showcase'})} style={style.createShowcase} onClick={handleSelectUploadOption}>
                    <div className="create-showcase">
                        <h2 className="title">QUẦY TRƯNG BÀY</h2>
                        <p className="caption">Trưng bày các tác phẩm của bạn liên quan đến một chủ đề hoặc tổng hợp của các tác phẩm khác</p>
                    </div>
                </div>

                <div className={classnames('option',{active : uploadType == 'upload-single-art'})} style={style.uploadSingleArt} onClick={() => handleSelectUploadOption('single-art')}>
                    <div className="upload-single-art">
                        <h2 className="title">TÁC PHẨM ĐƠN</h2>
                        <p className="caption">Một tác phẩm duy nhất</p>
                    </div>
                </div>
            </div>

            <div className="upload-area">
                <Suspense fallback={<h1>loading...</h1>}>
                    <Switch>
                        <Route exact path={url} component={CreateShowcase}/>
                        <Route exact path={url + '/upload-single-art'} component={UploadSingleArt}/>
                    </Switch>
                </Suspense>
            </div>
        </div>
    );
}

export default Upload;