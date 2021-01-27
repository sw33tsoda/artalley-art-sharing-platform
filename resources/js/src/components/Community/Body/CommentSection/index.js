import Axios from 'axios';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function CommentSection({artId}) {
    const user = useSelector(state => state.auth.authenticatedUser);
    // trigger refresh lại trang
    const [refresh,setRefresh] = useState(false);
    return (
        <div className="comment-section">
            <p className="title">Bình luận</p>
            {!isEmpty(user) && (
                <CommentForm 
                    parentColumn='art_id' 
                    parentId={artId} 
                    type="comment" 
                    action="add" 
                    refreshList={() => setRefresh(!refresh)}
                />
            )}
            <CommentList 
                artId={artId} 
                refresh={refresh} 
                refreshList={() => {
                    setRefresh(!refresh);
                }}/
            >
        </div>
    );
}

export default CommentSection;