import React from 'react';
import PropTypes from 'prop-types';

CommentsStats.propTypes = {
    data: PropTypes.number,
}

CommentsStats.defaultProps = {
    data: 0,
}


function CommentsStats({data}) {
    return (
        <div className="comments grid-item">
            <h2 className="title">Bình luận</h2>
            <p className="number">{data}</p>
        </div>
    );
}

export default CommentsStats;