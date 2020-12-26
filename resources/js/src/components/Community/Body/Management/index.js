import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import DragScroll from 'react-indiana-drag-scroll';
import ArtsList from '../Lists/ArtsList';

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
                // console.log(responses);
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
                                <div className="showcase">
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

                <ArtsList/>
            </div>
        </div>
    );
}

export default Management;