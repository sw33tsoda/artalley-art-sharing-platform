import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnnouncementMessage } from '../../../../../store/community/announcer';
import Comment from './Comment';

function CommentList({artId,refresh,refreshList}) {
    const [commentsList,setCommentsList] = useState([]);
    const [replyOnCommentId,setReplyOnCommentId] = useState(null);
    const user = useSelector(state => state.auth.authenticatedUser);
    const dispatch = useDispatch();
    useEffect(() => {
        const getCommentsList = async () => {
            await Axios.get(`/public/api/community/resources/public/get-comments-list-by-art-id/${artId}`).then(response => {
                setCommentsList([...response.data.list]);
            }).catch(error => {
                console.log(error.response);
            });
        }
        getCommentsList();
    },[artId,refresh]);

    const handleAction = async (commentId,action) => {
        switch (action) {
            case 'reply': {
                setReplyOnCommentId(commentId);
                break;
            }
            case 'edit': {
                break;
            }
            case 'delete': {
                await Axios.delete(`/public/api/community/resources/comments/${commentId}?api_token=${localStorage.getItem('authenticatedUserToken')}`).then(response => {
                    dispatch(setAnnouncementMessage({
                        message:response.data.message,
                        type:'success',
                    }));
                    refreshList();
                }).catch(error => {
                    dispatch(setAnnouncementMessage({
                        message:error.response.data.message,
                        type:'danger',
                    }));
                });
            }
            default:{
                break;
            }
        }
    }

    return (
        <div className="comment-list">
            {commentsList.map((comment,index) => Comment(comment,index,user.id,handleAction,replyOnCommentId))}
            {/* <pre>
                {JSON.stringify(commentsList,null,2)}
            </pre> */}
        </div>
    );
}

export default CommentList;