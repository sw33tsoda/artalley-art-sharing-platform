import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Route, Switch, useParams } from 'react-router-dom';
import classnames from 'classnames';
import CurrentPageSlug from '../../../../utilities/CurrentPageSlug';
import Arts from './Tabs/Arts';
import Showcases from './Tabs/Showcases';
import Questions from './Tabs/Questions';

function UserProfile() {
    const { id } = useParams();
    const [user,setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
            await Axios.get(`/public/api/community/resources/users/get/${id}`).then(response => {
                const {data:{user}} = response;
                setUser(user);
            }).catch(error => {
                console.log(error.response);
            })
        }
        getUser();
    },[]);

    return (
        <div className="user-profile">
            <div className="header">
                <div className="profile-picture">
                    <img src={`/storage/app/public/profilePictures/${user.profile_picture}`} onError={(event) => {
                        event.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
                    }}/>
                </div>
                <div className="profile-banner">
                    <img src="https://i.redd.it/kbhxfkobabf11.png"/>
                </div>
            </div>
            <div className="body">
                <div className="side-bar">
                    <div className="user-info">
                        <p className="fullname">{user.firstname + ' ' + user.lastname}</p>
                        <p className="username">@{user.username}</p>
                    </div>
                </div>
                <div className="content">
                    <div className="tabs">
                        <Link to={`/public/community/user/${user.id}/arts`}>
                            <div className={classnames('tab-item',{selected: CurrentPageSlug() == 'arts'})}>
                                <i className="fas fa-image"></i>
                            </div>
                        </Link>
                        <Link to={`/public/community/user/${user.id}/showcases`}>
                            <div className={classnames('tab-item',{selected: CurrentPageSlug() == 'showcases'})}>
                                <i className="fas fa-grip-horizontal"></i>
                            </div>
                        </Link>
                        <Link to={`/public/community/user/${user.id}/questions`}>
                            <div className={classnames('tab-item',{selected: CurrentPageSlug() == 'questions'})}>
                                <i className="far fa-question-circle"></i>
                            </div>
                        </Link>
                    </div>

                    <div className="sub-content">
                        <Switch>
                            <Route path={`/public/community/user/${user.id}/arts`} component={Arts} />
                            <Route path={`/public/community/user/${user.id}/showcases`} component={Showcases} />
                            <Route path={`/public/community/user/${user.id}/questions`} component={Questions} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;