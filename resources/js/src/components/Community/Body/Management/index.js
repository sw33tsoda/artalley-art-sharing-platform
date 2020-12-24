import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import DragScroll from 'react-indiana-drag-scroll';

function Management() {
    const [artsList,setArtsList] = useState([]);
    const [showcasesList,setShowcasesList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const apiToken = localStorage.getItem('authenticatedUserToken');
        const getArtsList = async () => {
            const arts = Axios.get(`/public/api/community/resources/showcases?api_token=${apiToken}`);
            const showcases = Axios.get(`/public/api/community/resources/arts?api_token=${apiToken}`);
            await Axios.all([
                arts,
                showcases,
            ]).then((responses) => {
                console.log(responses);
                const {data:{list:showcasesResult}} = responses[0];
                const {data:{list:artsResult}} = responses[1];
                setShowcasesList(showcasesResult);
                setArtsList(artsResult);
            }).catch(error => {
                console.log(error.response);
            });
        }
        getArtsList();
    },[]);

    const handleViewArt = (artId) => {
        history.push(`/public/community/art/${artId}`);
    }

    return (
        <div className="management">
            <div className="title">
                <h1 className="page-title">Quản lý</h1>
            </div>

            <div className="wrapper">
                {showcasesList.length > 0 ? (
                    <DragScroll className="showcases-list">
                        {showcasesList.map((showcase,index) => (
                            <Link to={`/public/community/showcase/${showcase.id}`}>
                                <div className="showcase" key={index}>
                                    <div className="title">{showcase.title}</div>
                                    <div className="thumbnail">
                                        <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/cyberpunk_2077_refund.jpg"/>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </DragScroll>
                ) :  (
                    <h1 className="no-item">Trống</h1>
                )}

                {artsList.length > 0 ? (
                    <div className="arts-list">
                        {artsList.map((art,index) => (
                            <div className="art" key={index} onClick={() => handleViewArt(art.id)}>
                                <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} />
                                {/* <img src={art.download_url} /> */}
                            </div>
                        ))}
                    </div>
                ) : (
                    <h1 className="no-item">Trống</h1>
                )}
            </div>
        </div>
    );
}

export default Management;