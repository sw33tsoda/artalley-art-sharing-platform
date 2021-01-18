import { FastField, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextareaField from '../../../../../CustomFields/TextareaField';
import { CommentValidation } from '../../../../../Validations';
import CommentForm from '../../CommentForm';
import classnames from 'classnames';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAnnouncementMessage } from '../../../../../../store/community/announcer';

function Comment({info,authenticatedUserId,setAction,currentAction,refreshList,repliesList,type}) {
    return (
        <div className={`${type}`}>
            <div className="profile-picture">
                <Link to={`/public/community/user/${info.users.id}/arts`}><img src={`/storage/app/public/profilePictures/${info.users.profile_picture}`}/></Link>
            </div>

            <div className="content">
                <div className="user-info">
                    <Link to={`/public/community/user/${info.users.id}/arts`}>{info.users.username}</Link>
                </div>
                <div className="callout-box">
                    <div className={classnames("callout",{edit_mode: currentAction.type == type && currentAction.id == info.id && currentAction.action == 'edit'})}>
                        {currentAction.type == type && currentAction.id == info.id && currentAction.action == 'edit' ? (
                            <CommentForm action='edit' type={type} parentId={info.id} initialValues={info} setAction={setAction} refreshList={refreshList}/>
                        ) : (
                            <p>{info[type]}</p>
                        )}
                    </div>
                    <div></div>
                    
                </div>
                
                {authenticatedUserId && (
                    <div className="action-controls form">
                        <div className="flex-box">
                            {info.user_id == authenticatedUserId && type !== 'reply' && (
                                <a onClick={() => setAction(info.id,'add','reply')}>{(info.id == currentAction.id && currentAction.type == 'comment') ? "HỦY" : "TRẢ LỜI"}</a>
                            )}
                        </div>
                    
                    
                        <div className="flex-box">  
                            {info.user_id == authenticatedUserId && (
                                <React.Fragment>
                                    <a onClick={() => setAction(info.id,'edit',type)}>Sửa</a>
                                    <a onClick={() => setAction(info.id,'delete',type)}>Xóa</a>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                )}
                {(info.user_id == authenticatedUserId && info.id == currentAction.id && currentAction.action == 'add' && currentAction.type == 'reply') && (
                    <CommentForm parentColumn='comment_id' parentId={info.id} refreshList={refreshList} type={currentAction.type} action='add' setAction={setAction}/>
                )}

                {repliesList && repliesList.map((reply,index) => (
                    <Comment 
                        info={reply}
                        key={index}
                        authenticatedUserId={authenticatedUserId}   
                        type='reply' 
                        setAction={setAction}
                        currentAction={currentAction}
                        refreshList={refreshList}
                    />
                ))}
            </div>
        </div>
    );
}

export default Comment;