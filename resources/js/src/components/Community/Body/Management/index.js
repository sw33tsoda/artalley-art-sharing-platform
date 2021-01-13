import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DragScroll from 'react-indiana-drag-scroll';
import ArtsList from '../Lists/ArtsList';
import { useSelector } from 'react-redux';

function Management() {
    const [showcasesList,setShowcasesList] = useState([]);
    const {id:userId} = useSelector(state => state.auth.authenticatedUser);

    useEffect(() => {
        const getArtsList = async () => {
            await Axios.get(`/public/api/community/resources/showcases/get-list/${userId}`).then((response) => {
                console.log(response.data.list);
                const {data:{list:showcasesResult}} = response;
                if (showcasesResult.length > 0) {
                    setShowcasesList(showcasesResult);
                }
            }).catch(error => {
                console.log(error.response);
            });
        }
        getArtsList();
    },[userId]);

    return (
        <div className="management">
            <div className="title">
                <h1 className="page-title">Quản lý</h1>
            </div>

            <div className="wrapper">
                {showcasesList.length > 0 ? (
                    <DragScroll className="showcases-list">
                        {showcasesList.map((showcase,index) => (
                            <Link to={`/public/community/showcase/${showcase.id}`} key={index}>
                                <p className="title">{showcase.title}</p>
                                <div className="list">
                                    {showcase.showcase_arts.slice(0,3).map((showcase_art,index) => {
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
                                    {showcase.showcase_arts.length > 3 && (
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
                            </Link>
                        ))}
                    </DragScroll>
                ) :  (
                    <h1 className="no-item">Trống</h1>
                )}

                <ArtsList userId={userId}/>
            </div>
        </div>
    );
}

export default Management;