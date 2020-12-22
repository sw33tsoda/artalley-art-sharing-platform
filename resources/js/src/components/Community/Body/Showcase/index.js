import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import _ from 'lodash';
function Showcase() {
    const [showcase,setShowcase] = useState({});
    const [background,setBackground] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const getSpecificShowcase = async () => {
            await Axios.get(`/public/api/community/resources/showcases/get/${id}`).then(response => {
                const {data:{showcase}} = response;
                setShowcase({...showcase});
                setBackground(showcase.showcase_arts[0].arts.art);
            }).catch(error => {
                // const {data:{message}} = error.response;
                console.log(error.response);
            })
        };
        getSpecificShowcase();
    },[]);
    return (
        <div className="showcase">
            <div className="background" style={{background:`linear-gradient(black, black),url('/storage/app/public/community/1/arts/${background}')`}}></div>
            <div className="header">
                <div className="title">
                    <h1>{showcase.title}</h1>
                </div>
                <div className="subheading">
                    <h2>{showcase.subheading}</h2>
                </div>
                <div className="description">
                    <p>{showcase.description}</p>
                </div>
            </div>
            <div className="arts-wrapper">
                <div className="arts-list">
                    {!_.isEmpty(showcase.showcase_arts) && showcase.showcase_arts.map(({arts:art},index) => (
                        <div className="wrapper" key={index}>
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
                            <div className="art">
                                <img src={`/storage/app/public/community/1/arts/${art.art}`}/>
                                <div className="view-more">
                                    <Link to={`/public/community/art/${art.id}`}>XEM THÊM</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Showcase;