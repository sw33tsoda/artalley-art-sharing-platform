import React from 'react';
import PropTypes from 'prop-types';

ArtsStats.propTypes = {
    data: PropTypes.object,
}

ArtsStats.defaultProps = {
    data: {},
}


function ArtsStats({data}) {
    
    return (
        <div className="arts grid-item">
            <h2 className="main-title">Tác phẩm</h2>
            <p className="number">{data.total}</p>
            <h3 className="group-title">Theo kênh ảnh</h3>
            <div className="stats-group channel">
                {data.by_channels && data.by_channels.map((number,index) => (
                    <div className="stats" key={index}>
                        <p className="name">{number.name}</p>
                        <p className="number">{number.count}</p>
                    </div>
                ))}
            </div>
            <h3 className="group-title">Theo không gian</h3>
            <div className="stats-group dimension">
                {data.by_dimensions && data.by_dimensions.map((number,index) => (
                    <div className="stats" key={index}>
                        <p className="name">{number.name}</p>
                        <p className="number">{number.count}</p>
                    </div>
                ))}
                {(data.by_channels && data.by_dimensions) && Array.from({length:data.by_channels.length - data.by_dimensions.length},() => null).map((box,index) => (
                    <div className="stats" key={index}>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArtsStats;