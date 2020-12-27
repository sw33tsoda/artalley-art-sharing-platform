import React from 'react';
import ShowcasesList from '../../../Lists/ShowcasesList';

function Showcases({userId}) {
    return (
        <div className="showcases">
            <ShowcasesList userId={userId}/>
        </div>
    )
}

export default Showcases;