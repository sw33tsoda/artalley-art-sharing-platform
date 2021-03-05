import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { authRefresh } from '../../../../store/auth';
import Statistic from './Statistic';
import Profile from './Profile';

function UserSetting() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.authenticatedUser);

    useEffect(() => {
        dispatch(authRefresh());
    },[]);

    return (
        <div className="user-setting">
            <h1 className="page-title">Cài đặt</h1>
            <div className="page-content">
                <div className="navbar">
                    <div className="item">
                        <Link to={`/public/community/user/${user.id}/arts`}>
                            <h1 className="title">Trang cá nhân</h1>
                        </Link>
                    </div>
                    
                    <div className="item">
                        <Link to="/public/community/setting/statistic">
                            <h1 className="title">Thống kê</h1>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/public/community/setting/profile">
                            <h1 className="title">Thông tin cá nhân</h1>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/public/community/setting/history">
                            <h1 className="title">Lịch sử truy cập</h1>
                        </Link>
                    </div>
                </div>
                <div className="content">
                    <Switch>
                        <Route path="/public/community/setting/statistic" component={() => <Statistic user={user}/>}/>
                        <Route path="/public/community/setting/profile" component={() => <Profile user={user}/>}/>
                        <Route path="/public/community/setting/history" component={() => <h1>lich su</h1>}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default UserSetting;