import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';
import { Switch, useRouteMatch,Route, Redirect } from 'react-router-dom';
import Art from './Art';
import User from './User';
import AddEditForm from './User/List/AddEditForm';

function Content(props) {
    const match = useRouteMatch();
    const admin = useSelector(state => state.auth.authenticatedUser);
    const [editAdminToggle,setEditAdminToggle] = useState(false);
    return (
        <div className="content">
            <div className="top-nav">
                <div className="admin-info" onClick={() => setEditAdminToggle(true)}>
                    <div className="info">
                        <p className="fullname">{admin.lastname + ' ' + admin.firstname}</p>
                    </div>
                    <div className="profile-picture" style={{
                        backgroundImage:`url('${admin.profile_picture == null ? 'https://i.pinimg.com/736x/2d/0a/bf/2d0abf1e81efe5f2a962fe7824aebda1.jpg' : '/storage/app/public/profilePictures/' + admin.profile_picture}')`,
                    }}></div>
                </div>

                {editAdminToggle && (
                    <div className="draggable admin-edit-draggable">
                        <Draggable handle='.edit-admin-title'>
                            <div className="admin-form user-crud">
                                <h1 className="edit-admin-title handle">QUẢN TRỊ VIÊN</h1>
                                <AddEditForm closeAddEditForm={() => setEditAdminToggle(false)} formType='edit' userInfo={admin}/>
                            </div>
                        </Draggable>
                    </div>
                )}
            </div>
            <div className="resource">
                <Switch>
                    <Route path={`${match.url}/user`} component={User}></Route>
                    <Route path={`${match.url}/art`} component={Art}></Route>
                    <Route path={`${match.url}/community`} component={null}></Route>
                </Switch>
            </div>
        </div>
    );
}

export default Content;