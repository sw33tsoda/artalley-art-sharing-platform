import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';


function ShowcasesList({userId}) {
    const [showcasesList,setShowcasesList] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        // const apiToken = localStorage.getItem('authenticatedUserToken');
        const getArtsList = async () => {
            await Axios.get(`/public/api/community/resources/showcases/get-list/${userId}`).then((response) => {
                const {data:{list}} = response;
                if (list.length > 0) {
                    setShowcasesList(list);
                }
                setLoading(false);
            }).catch(error => {
                console.log(error.response);
            });
        }
        getArtsList();
    },[userId]);

    return (
        !loading ? showcasesList.length > 0 ? (
            <div className="showcases-list">
                {showcasesList.map((showcase,index) => (
                    <Link to={`/public/community/showcase/${showcase.id}`} key={index}>
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
                                                <i className="fas fa-grip-horizontal"></i> {showcase.showcase_arts.length - 3}+ 
                                            </p>
                                        </div>
                                        <div className="showcase-title">
                                            
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                        <div className="info">
                            <p className="title">{showcase.title}</p>
                            <p className="subheading">{showcase.subheading}</p>
                            <p className="date"><Moment format="H:m:sA D/MM/yyyy">{showcase.created_at}</Moment></p>
                        </div>
                    </Link>
                ))}
            </div>
        ) :  (
            <h1 className="no-item">Trống</h1>
        ) : (
            <center>
               <img className="loading" src="https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif" style={{
                   width:'50px',
                   height:'50px',
                   paddingTop:'50px',
               }}/>
            </center>
        )
    );
}

export default ShowcasesList;