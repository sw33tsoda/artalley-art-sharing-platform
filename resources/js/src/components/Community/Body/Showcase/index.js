import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import _ from 'lodash';
import DragScroll from 'react-indiana-drag-scroll';
function Showcase() {
    const [showcase,setShowcase] = useState({});
    // const [background,setBackground] = useState('');
    const [artist,setArtist] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getSpecificShowcase = async () => {
            await Axios.get(`/public/api/community/resources/showcases/get/${id}`).then(response => {
                const {data:{showcase}} = response;
                setShowcase({...showcase});
                setBackground(showcase.showcase_arts[0].arts.art);
                setArtist({...showcase.showcase_arts[0].users});
            }).catch(error => {
                // const {data:{message}} = error.response;
                console.log(error.response);
            })
        };
        getSpecificShowcase();
    },[]);
    return (
        <div className="showcase">
            <div className="background"></div>
            <div className="header">
                <div className="title">
                    <h1>{showcase.title}</h1>
                </div>
                <div className="subheading">
                    <h2>{showcase.subheading}</h2>
                </div>
            </div>
            <DragScroll className="arts-wrapper">
                <div className="arts-list">
                    {!_.isEmpty(showcase.showcase_arts) && showcase.showcase_arts.map(({arts:art},index) => (
                        <div className="wrapper" key={index}>
                            <div className="art">
                                <div className="overlay">
                                    <div className="title">
                                        <h2>{art.title}</h2>
                                    </div>
                                    <div className="caption">
                                        <p>{art.caption} Summoner's Rift is the flagship game mode of League of Legends and the only one featured in professional-level play.</p>
                                    </div>
                                    <div className="description">
                                        <p>{art.description} Summoner's Rift is the flagship game mode of League of Legends and the only one featured in professional-level play. Summoner's Rift is the flagship game mode of League of Legends and the only one featured in professional-level play. Summoner's Rift is the flagship game mode of League of Legends and the only one featured in professional-level play.Summoner's Rift is the flagship game mode of League of Legends and the only one featured in professional-level play.Summoner's Rift is the flagship game mode of League of Legends and the only one featured in professional-level play. Summoner's Rift is the flagship game mode of League of Legends and the only one featured in professional-level play. Summoner's Rift is the flagship game mode of League of Legends and the only one featured in professional-level play. Summoner's Rift is the flagship game mode of League of Legends and the only one featured in professional-level play</p>
                                    </div>
                                </div>
                                <img src={`/storage/app/public/community/1/arts/${art.art}`}/>

                                <div className="genres">
                                    <div className="dimensional">
                                        <h1>{art.dimensions && art.dimensions.dimensional}</h1>
                                    </div>
                                    <div className="channel">
                                        <h1>{art.art_channels && art.art_channels.channel_name}</h1>
                                    </div>
                                </div>
                                <div className="view-more">
                                    <Link to={`/public/community/art/${art.id}`}>XEM THÊM</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </DragScroll>
            <div className="footer">
                <div className="description">
                    <p>{showcase.description}</p>
                </div>
                
                <div className="more">
                    <div className="artist">
                        <p className="title">TÁC GIẢ</p>
                        <div className="info">
                            <Link to={`/public/community/user/${artist.id}`}>
                                <div className="profile-picture">
                                    {(artist && artist.profile_picture !== null) ? <img src={`/storage/app/public/profilePictures/${artist.profile_picture}`} /> : <i className="fas fa-user"></i>}
                                </div>
                            </Link>
                            <div className="name">
                                <Link to={`/public/community/user/${artist.id}`}>
                                    <p className="username">{artist && artist.username}</p>
                                </Link>
                                <p className="fullname">{artist && artist.firstname + ' ' + artist.lastname}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Showcase;