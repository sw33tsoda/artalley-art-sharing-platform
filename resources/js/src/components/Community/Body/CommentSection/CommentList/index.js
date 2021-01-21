import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnnouncementMessage } from '../../../../../store/community/announcer';
import Comment from './Comment';

function CommentList({artId,refresh,refreshList}) {
    const [isLoading,setIsLoading] = useState(false);
    const [commentsList,setCommentsList] = useState([]);
    const [currentAction,setCurrentAction] = useState({
        type:null,
        action:null,
        id:null,
    });
    const [listInfo,setListInfo] = useState({
        currentPage:null,
        lastPage:null,
    });
    // console.log(currentAction);
    const user = useSelector(state => state.auth.authenticatedUser);
    const dispatch = useDispatch();
    useEffect(() => {
        const getCommentsList = async () => {
            await Axios.get(`/public/api/community/resources/public/get-comments-list-by-art-id/${artId}?page=1`).then(response => {
                setListInfo({
                    currentPage:response.data.list.current_page,
                    lastPage:response.data.list.last_page,
                });
                setCommentsList(response.data.list.data);
            }).catch(error => {
                console.log(error.response);
            });
        }
        getCommentsList();
    },[artId,refresh]);

    const getMoreComments = async () => {
        await Axios.get(`/public/api/community/resources/public/get-comments-list-by-art-id/${artId}?page=${listInfo.currentPage + 1}`).then(response => {
            setCommentsList(commentsList.concat(response.data.list.data));
            setListInfo({
                ...listInfo,
                currentPage:response.data.list.current_page,
            });
        }).catch(error => {
            console.log(error.response);
        });
    }

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
                return await Axios.delete(`/public/api/community/resources/${resource}/${id}?api_token=${localStorage.getItem('authenticatedUserToken')}`);
                break;
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
                    repliesListData={comment.replies}
                    type="comment"
                />
            ))}
            {listInfo.currentPage !== listInfo.lastPage && (
                <div className="action-wrapper">
                    <div className="action" onClick={getMoreComments}>
                        <i className="fas fa-plus"></i>
                        <p className="text">TẢI THÊM</p>
                    </div>
                </div>
            )}
            {/* <pre>
                {JSON.stringify(commentsList,null,2)}
            </pre> */}
        </div>
    );
}

export default CommentList;