import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
                                <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} onError={(event) => {
                                    event.target.src = "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif";
                                }} />
                                {/* <img src={art.download_url} /> */}
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            {type == 'showcase' && (
                <div className="showcases-list">
                    {data.map((showcase,index) => (
                        <div className="item" key={index}>
                            <Link to={`/public/community/showcase/${showcase.id}`}>
                                <p className="title">{showcase.title}</p>
                            </Link>
                            <div className="list">
                                {showcase.showcase_arts && showcase.showcase_arts.slice(0,3).map((showcase_art,index) => {
                                    return (
                                        <Link to={`/public/community/art/${showcase_art.arts.id}`} key={index}>
                                            <div className="showcase">
                                                <div className="showcase-thumbnail">
                                                    <img src={`/storage/app/public/community/${showcase_art.user_id}/arts/${showcase_art.arts.art}`}/>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                                {(showcase.showcase_arts && showcase.showcase_arts.length > 3) && (
                                    <Link to={`/public/community/showcase/${showcase.id}`}>
                                        <div className="showcase">
                                            <div className="showcase-thumbnail has-more">
                                                <p>
                                                    <i className="fas fa-image"></i> {showcase.showcase_arts.length - 3}+ 
                                                </p>
                                            </div>
                                            <div className="showcase-title">
                                                
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {type == 'user' && (
                <div className="users-list">
                    {data.map((user,index) => (
                        <Link to={`/public/community/user/${user.id}/arts`}key={index}>
                            <div className="user">
                                <div className="profile-picture">
                                    <img src={`/storage/app/public/profilePictures/${user.profile_picture}`} onError={(event) => {
                                        event.target.src = "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif";
                                    }} />
                                </div>

                                <div className="info">
                                    <p className="username">{user.username}</p>
                                    <p className="fullname">{user.firstname + ' ' + user.lastname}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Content;