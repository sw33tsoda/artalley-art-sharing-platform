import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import _ from 'lodash';

function ShowArt() {
    const { id } = useParams();
    const [art,setArt] = useState({});
    console.log(art);
    useEffect(() => {
        const getArt = async () => {
            await Axios.get(`/public/api/community/resources/arts/get/${id}`).then(response => {
                const {data:{art}} = response;
                if (art.tags == null) {
                    art.tags = [];
                } else {
                    art.tags = art.tags.split(',');
                }
                setArt({...art});
            }).catch(error => {
                console.log(error.response);
            })
        }
        getArt();
    },[]);
    
    return (
        <div className="show-art">
            <div className="header">
                <div className="title">
                    <h1>{art.title}</h1>
                </div>
                <div className="genres">
                    <div className="dimensional">
                        <h1>{art.dimensions && art.dimensions.dimensional}</h1>
                    </div>
                    <div className="channel">
                        <h1>{art.art_channels && art.art_channels.channel_name}</h1>
                    </div>
                </div>
            </div>
            
            <div className="art-wrapper">
                <div className="art">
                    <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} />
                </div>

                <div className="caption">
                    <p>{art.caption}</p>
                </div>
            </div>

            <div className="footer">
                <div className="description">
                    <p>{art.description}</p>
                </div>

                {!_.isEmpty(art) && <div className="more" style={{justifyContent: art.tags.length > 0 && art.showcase_arts.length > 0 ? 'space-between' : 'space-evenly'}}>
                    <div className="artist">
                        <p className="title">TÁC GIẢ</p>
                        <div className="info">
                            <div className="profile-picture">
                                {(art.users && art.users.profile_picture !== null) ? <img src={`/storage/app/public/profilePictures/${art.users.profile_picture}`} /> : <i className="fas fa-user"></i>}
                            </div>
                            <div className="name">
                                <p className="username">{art.users && art.users.username}</p>
                                <p className="fullname">{art.users && art.users.firstname + ' ' + art.users.lastname}</p>
                            </div>
                        </div>
                    </div>
                        {!_.isEmpty(art.showcase_arts) && (
                            <div className="showcases-list">
                                <p className="title">THUỘC</p>
                                <div className="list">
                                    {art.showcase_arts.map((showcase,index) => (
                                        <Link to={`/public/community/showcase/${showcase.showcase_id}`}>
                                            <div className="showcase">
                                                <div className="showcase-thumbnail">
                                                    <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/cyberpunk_2077_refund.jpg"/>
                                                </div>
                                                <div className="showcase-title">
                                                    <p>
                                                        {showcase.showcases.title}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        {art.tags.length > 0 && (
                            <div className="tags">
                                <p className="title">THẺ</p>
                                {art.tags.map((tag,index) => (
                                    <Link to="" key={index}>{tag}</Link>
                                ))}
                            </div>
                        )}
                </div>}
            </div>
        </div>
    );
}

export default ShowArt;