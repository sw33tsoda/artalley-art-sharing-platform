import React from 'react';
import PropTypes from 'prop-types';

Loading.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    isLoading: PropTypes.bool,
}

Loading.defaultProps = {
    type:'spinner',
    width:'50px',
    height:'50px',
    isLoading:false,
}


function Loading({children,type,width,height,isLoading}) {
    return (
        isLoading ? (
            <center className="loading-wrapper">
                <img className="loading" src="https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif" width={width} height={height}/>
            </center>
        ) : (
            children
        )
    )
}

export default Loading;