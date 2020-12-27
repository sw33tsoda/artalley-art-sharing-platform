import React from 'react';
import ArtsList from '../../../Lists/ArtsList';
import Management from '../../../Management';

function Arts({userId}) {
    return (
        <div className="arts">
            <ArtsList userId={userId}/>
        </div>
    )
}

export default Arts;