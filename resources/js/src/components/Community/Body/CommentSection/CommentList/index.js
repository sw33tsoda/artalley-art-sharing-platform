import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnnouncementMessage } from '../../../../../store/community/announcer';
import Comment from './Comment';

function CommentList({artId,refresh,refreshList}) {
    const [commentsList,setCommentsList] = useState([]);
    const [currentAction,setCurrentAction] = useState({
        type:null,
        action:null,
        id:null,
    });
    // console.log(currentAction);
    const user = useSelector(state => state.auth.authenticatedUser);
    const dispatch = useDispatch();
    useEffect(() => {
        const getCommentsList = async () => {
            await Axios.get(`/public/api/community/resources/public/get-comments-list-by-art-id/${artId}`).then(response => {
                // console.log(response);
                setCommentsList([...response.data.list]);
            }).catch(error => {
                console.log(error.response);
            });
        }
        getCommentsList();
    },[artId,refresh]);

    const handleAction = async (id,action,type) => {
        switch (action) {
            case 'add': {
                setCurrentAction({
                    type:type,
                    action:'add',
                    id:id
                });
                break;
            }
            case 'edit': {
                setCurrentAction({
                    type:type,
                    action:'edit',
                    id:id
                })
                break;
            }
            case 'delete': {
                const resource = (function(){
                    switch (type) {
                        case 'comment': return 'comments';
                        case 'reply' : return 'replies';
                    }
                })();
                await Axios.delete(`/public/api/community/resources/${resource}/${id}?api_token=${localStorage.getItem('authenticatedUserToken')}`).then(response => {
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

            case 'clear': {
                setCurrentAction({
                    action:null,
                    type:null,
                    id:null,
                });
            }
            default:{
                break;
            }
        }
    }

    // debugger;

    return (
        <div className="comment-list">
            {commentsList && commentsList.map((comment,index) => (
                <Comment 
                    info={comment} 
                    key={index}
                    authenticatedUserId={user.id} 
                    setAction={handleAction} 
                    currentAction={currentAction}
                    refreshList={refreshList}
                    repliesList={comment.replies}
                    type="comment"
                />
            ))}
            {/* <pre>
                {JSON.stringify(commentsList,null,2)}
            </pre> */}
        </div>
    );
}

export default CommentList;