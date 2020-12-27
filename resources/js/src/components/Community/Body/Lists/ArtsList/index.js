import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ArtsList({userId}) {
    const [artsList,setArtsList] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        // const apiToken = localStorage.getItem('authenticatedUserToken');
        const getArtsList = async () => {
            await Axios.get(`/public/api/community/resources/arts/get-list/${userId}`).then((response) => {
                const {data:{list}} = response;
                if (list.length > 0) {
                    setArtsList(list);
                }
                setLoading(false);
            }).catch(error => {
                console.log(error.response);
            });
        }
        getArtsList();
    },[userId]);

    return (
        !loading ? artsList.length > 0 ? (
            <div className="arts-list">
                {artsList.map((art,index) => (
                    <Link to={`/public/community/art/${art.id}`} key={index}>
                        <div className="art">
                            <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} />
                            {/* <img src={art.download_url} /> */}
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

export default ArtsList;