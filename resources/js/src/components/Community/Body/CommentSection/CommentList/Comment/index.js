import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../../CommentForm';

function Comment(info,index,authenticatedUserId,setAction,replyOnCommentId) {

    return (
        <div className="comment" key={index}>
            <div className="profile-picture">
                <Link to={`/public/community/user/${info.users.id}/arts`}><img src={`/storage/app/public/profilePictures/${info.users.profile_picture}`}/></Link>
            </div>

            <div className="content">
                <div className="user-info">
                    <Link to={`/public/community/user/${info.users.id}/arts`}>{info.users.username}</Link>
                </div>
                <div className="callout-box">
                    <div className="callout">
                        <p>{info.comment}</p>
                    </div>
                    <div></div>
                </div>
                {(info.user_id == authenticatedUserId && info.id !== replyOnCommentId) && (
                    <div className="action-controls form">
                        <div className="flex-box">
                            <a onClick={() => setAction(info.id,'reply')}>TRẢ LỜI</a>
                        </div>
                        <div className="flex-box">
                            <a>Sửa</a>
                            <a onClick={() => setAction(info.id,'delete')}>Xóa</a>
                        </div>
                    </div>
                )}
                {(info.user_id == authenticatedUserId && info.id == replyOnCommentId) && <CommentForm/>}
            </div>
        </div>
    );
}

export default Comment;