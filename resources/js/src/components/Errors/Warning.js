import React from 'react';

function Warning(props) {
    const {warning,description} = props;
    return (
        <div className="web-error">
            <h1>{warning}</h1>
            <h3>{description}</h3>
        </div>
    );
}

export default Warning;