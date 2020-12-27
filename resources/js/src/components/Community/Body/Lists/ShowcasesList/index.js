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
                        <div className="showcase">
                            <div className="thumbnail">
                                <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/cyberpunk_2077_refund.jpg"/>
                            </div>
                            <div className="content">
                                <p className="title">{showcase.title}</p>
                                <p className="subheading">{showcase.subheading}</p>
                                <p className="extra"><Moment date={showcase.created_at} format='d:m:ssA - D/MM/yyyy' /></p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        ) : (
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