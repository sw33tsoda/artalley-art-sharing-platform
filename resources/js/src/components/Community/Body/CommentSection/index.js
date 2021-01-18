import Axios from 'axios';
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function CommentSection({artId}) {
    const [refresh,setRefresh] = useState(false);
    return (
        <div className="comment-section">
            <p className="title">Bình luận</p>
            <CommentForm parentColumn='art_id' parentId={artId} type="comment" refreshList={() => setRefresh(!refresh)}/>
            <CommentList artId={artId} refresh={refresh} refreshList={() => {
                setRefresh(!refresh);
            }}/>
        </div>
    );
}

export default CommentSection;