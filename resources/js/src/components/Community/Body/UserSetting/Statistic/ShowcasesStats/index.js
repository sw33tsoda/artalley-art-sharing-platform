import React from 'react';
import PropTypes from 'prop-types';

ShowcasesStats.propTypes = {
    data: PropTypes.number,
}

ShowcasesStats.defaultProps = {
    data: 0,
}


function ShowcasesStats({data}) {
    return (
        <div className="showcases grid-item">
            <h2 className="title">Quày trưng bày</h2>
            <p className="number">{data}</p>
        </div>
    );
}

export default ShowcasesStats;