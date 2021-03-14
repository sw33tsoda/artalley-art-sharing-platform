import React from 'react';

function LoadingSpinner({children,isLoading}) {
    return (
        <React.Fragment>
            <div className="loading-spinner" style={!isLoading ? {
                position:'fixed',
                left:'-9999px',
            } : {}}>
                <div className="shape"></div>
                <p className="loading-text">Đang tải...</p>
            </div>
            <div style={isLoading ? {
                position:'fixed',
                left:'-9999px',
            } : {}}>
                {children}
            </div>
        </React.Fragment>
    );
}

export default LoadingSpinner;