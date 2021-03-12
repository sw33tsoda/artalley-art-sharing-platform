import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import Axios from 'axios';
import LoadingSpinner from '../../../../../../LoadingSpinner';
import Moment from 'react-moment';
import classnames from 'classnames';
import { isEmptyObject } from 'jquery';

function FullUserInfo() {
    const { id } = useParams();
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        (async function() {
            await Axios.get(`/public/api/admin/resources/users/${id}?api_token=${localStorage.getItem('authenticatedUserToken')}`).then(response => {
                const {user_info} = response.data;
                setUser({...user_info});
                setIsLoading(false);
            }).catch(error => {
                console.log(error.response);
            });
        })();
    },[id]);

    return (
        <div className="full-user-info">
            <LoadingSpinner isLoading={isLoading}>
                {!isEmptyObject(user) && <React.Fragment>
                    <div className="pics">
                        <div className={classnames('profile-picture',{no_pic: user.profile_picture == null})}>
                            {user.profile_picture !== null ? <img src={`/storage/app/public/profilePictures/${user.profile_picture}`}/> : <p className="text">Không có ảnh</p>}
                        </div>
                        <div className={classnames('banner',{no_pic: user.banner == null})}>
                            {user.banner !== null ? <img src={`/storage/app/public/banners/${user.banner}`}/> : <p className="text">Không có ảnh</p>}
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="outer-group">
                            <div className="inner-group">
                                <div className="field">Tên</div>
                                <div className="value">{user.firstname}</div>
                            </div>
                            <div className="inner-group">
                                <div className="field">Họ</div>
                                <div className="value">{user.lastname}</div>
                            </div>
                        </div>
                        <div className="outer-group">
                            <div className="inner-group">
                                <div className="field">Tên người dùng</div>
                                <div className="value">{user.username}</div>
                            </div>
                            <div className="inner-group">
                                <div className="field">Địa chỉ Email</div>
                                <div className="value">{user.email}</div>
                            </div>
                            <div className="inner-group">
                                <div className="field">Vai trò</div>
                                <div className="value">{user.role == 'admin' ? 'Quản trị viên' : 'Thành viên'}</div>
                            </div>
                        </div>
                        <div className="outer-group">
                            <div className="inner-group">
                                <div className="field">Token</div>
                                <div className="value">{user.api_token}</div>
                            </div>
                            <div className="inner-group">
                                <div className="field">Tiểu sử</div>
                                <div className="value">{user.bio}</div>
                            </div>
                        </div>

                        <div className="outer-group">
                            <div className="inner-group">
                                <div className="field">Facebook</div>
                                <div className="value">{user.facebook}</div>
                            </div>
                            <div className="inner-group">
                                <div className="field">Twitter</div>
                                <div className="value">{user.twitter}</div>
                            </div>
                        </div>

                        <div className="outer-group">
                            <div className="inner-group">
                                <div className="field">Ngày tham gia</div>
                                <div className="value"><Moment format="H:m:ssA DD/MM/yyyy">{user.created_at}</Moment></div>
                            </div>
                            <div className="inner-group last">
                                <div className="field">Ngày sửa đổi</div>
                                <div className="value"><Moment format="H:m:ssA DD/MM/yyyy">{user.updated_at}</Moment></div>
                            </div>
                        </div>
                    </div>

                    <div className="stats">
                        <div className="grid-box">
                            <div className="main-stats">
                                <p>Tác phẩm</p>
                                <p>{user.stats.arts.total}</p>
                            </div>
                            <div className="extra-stats">
                                {user.stats.arts.by_channels.map((channel,index) => (
                                    <div className="wrapper" key={index}>
                                        <div className="name">{channel.name}</div>
                                        <div className="number">{channel.count}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="extra-stats">
                                {user.stats.arts.by_dimensions.map((dimension,index) => (
                                    <div className="wrapper" key={index}>
                                        <div className="name">{dimension.name}</div>
                                        <div className="number">{dimension.count}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid-box">
                            <div className="main-stats">
                                <p>Quày trưng bày</p>
                                <p>{user.stats.showcases}</p>
                            </div>
                        </div>
                        <div className="grid-box">
                            <div className="main-stats">
                                <p>Bình luận</p>
                                <p>{user.stats.comments}</p>
                            </div>
                        </div>
                    </div>
                </React.Fragment>}
            </LoadingSpinner>
        </div>
    );
}

export default FullUserInfo;