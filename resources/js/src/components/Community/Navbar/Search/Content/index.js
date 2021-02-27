import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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

            {type == 'user' && (
                <div className="users-list">
                    {data.map((user,index) => (
                        <Link to={`/public/community/user/${user.id}`}key={index}>
                            <div className="user">
                                <div className="profile-picture">
                                    <img src={`/storage/app/public/profilePictures/${user.profile_picture}`} onError={(event) => {
                                        event.target.src = "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif";
                                    }} />
                                </div>

                                <div className="username">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                        </Link>
                    ))}

{data.map((user,index) => (
                        <Link to={`/public/community/user/${user.id}`}key={index}>
                            <div className="user">
                                <div className="profile-picture">
                                    <img src={`/storage/app/public/profilePictures/${user.profile_picture}`} onError={(event) => {
                                        event.target.src = "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif";
                                    }} />
                                </div>

                                <div className="username">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                        </Link>
                    ))}

{data.map((user,index) => (
                        <Link to={`/public/community/user/${user.id}`}key={index}>
                            <div className="user">
                                <div className="profile-picture">
                                    <img src={`/storage/app/public/profilePictures/${user.profile_picture}`} onError={(event) => {
                                        event.target.src = "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif";
                                    }} />
                                </div>

                                <div className="username">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                        </Link>
                    ))}

{data.map((user,index) => (
                        <Link to={`/public/community/user/${user.id}`}key={index}>
                            <div className="user">
                                <div className="profile-picture">
                                    <img src={`/storage/app/public/profilePictures/${user.profile_picture}`} onError={(event) => {
                                        event.target.src = "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif";
                                    }} />
                                </div>

                                <div className="username">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                        </Link>
                    ))}

{data.map((user,index) => (
                        <Link to={`/public/community/user/${user.id}`}key={index}>
                            <div className="user">
                                <div className="profile-picture">
                                    <img src={`/storage/app/public/profilePictures/${user.profile_picture}`} onError={(event) => {
                                        event.target.src = "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif";
                                    }} />
                                </div>

                                <div className="username">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                        </Link>
                    ))}

{data.map((user,index) => (
                        <Link to={`/public/community/user/${user.id}`}key={index}>
                            <div className="user">
                                <div className="profile-picture">
                                    <img src={`/storage/app/public/profilePictures/${user.profile_picture}`} onError={(event) => {
                                        event.target.src = "https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif";
                                    }} />
                                </div>

                                <div className="username">
                                    <p>{user.username}</p>
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