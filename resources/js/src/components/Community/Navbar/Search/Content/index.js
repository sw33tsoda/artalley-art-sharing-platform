import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Content.propTypes = {
    data : PropTypes.array,
    type : PropTypes.string,
}

Content.defaultProps = {
    data : [],
    type : '',
}

function Content({data,type}) {
    return (
        <div className="content">
            {type == 'art' && (
                <div className="arts-list">
                    {data.map((art,index) => (
                        <Link to={`/public/community/art/${art.id}`} key={index}>
                            <div className="art">
                                <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} />
                                {/* <img src={art.download_url} /> */}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Content;