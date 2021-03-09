import React from 'react';

function LoadingSpinner({children,isLoading}) {
    return (
        isLoading ? (
            <div className="loading-spinner">
                <div className="shape"></div>
                <p className="loading-text">Đang tải...</p>
            </div>
        ) : (
            children
        )
    );
}

export default LoadingSpinner;