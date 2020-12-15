import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

function Management() {
    const [artsList,setArtsList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const apiToken = localStorage.getItem('authenticatedUserToken');
        const getArtsList = async () => {
            // await Axios.get(`https://picsum.photos/v2/list?page=2&limit=30`)
            await Axios.get(`/public/api/community/resources/arts?api_token=${apiToken}`).then(response => {
                const {data:{list}} = response;
                // console.log(response);
                setArtsList(list);
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
            <div className="arts-list">
                {artsList.length > 0 ? (artsList.map((art,index) => (
                    <div className="art" key={index} onClick={() => handleViewArt(art.id)}>
                        <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} />
                        {/* <img src={art.download_url} /> */}
                    </div>
                ))) : (
                    <h1>Không có tác phẩm nào</h1>
                )}
            </div>
        </div>
    );
}

export default Management;