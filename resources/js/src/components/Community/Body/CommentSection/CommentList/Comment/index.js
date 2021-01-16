import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../../CommentForm';

function Comment({info,authenticatedUserId,setAction,replyOnCommentId,refreshList,repliesList,type}) {
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
                    <div className="callout">
                        <p>{info[type]}</p>
                    </div>
                    <div></div>
                </div>
                
                {authenticatedUserId && (
                    <div className="action-controls form">
                        <div className="flex-box">
                            {info.user_id == authenticatedUserId && (
                                <a onClick={() => setAction(type == 'reply' ? info.comment_id : info.id,'reply',type)}>{(info.id !== replyOnCommentId) ? "TRẢ LỜI" : "HỦY"}</a>
                            )}
                        </div>
                    
                    
                        <div className="flex-box">  
                            {info.user_id == authenticatedUserId && (
                                <React.Fragment>
                                    <a>Sửa</a>
                                    <a onClick={() => setAction(info.id,'delete',type)}>Xóa</a>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                )}
                {(info.user_id == authenticatedUserId && info.id == replyOnCommentId) && <CommentForm parentColumn='comment_id' parentId={info.id} refreshList={refreshList} type='reply'/>}

                {repliesList && repliesList.map((reply,index) => (
                    <Comment 
                        info={reply}
                        key={index}
                        authenticatedUserId={authenticatedUserId}   
                        type='reply' 
                        setAction={setAction}
                    />
                ))}
            </div>
        </div>
    );
}

export default Comment;