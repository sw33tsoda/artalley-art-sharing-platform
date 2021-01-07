import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

function ArtsList({userId}) {
    const [artsList,setArtsList] = useState({
        list:[],
        page:1,
        hasMore:true,
        maxPage:0,
        totalArts:null,
    });
    const [loading,setLoading] = useState(true);


    useEffect(() => {
        // const apiToken = localStorage.getItem('authenticatedUserToken');
        const getArtsList = async () => {
            await Axios.get(`/public/api/community/resources/arts/get-list/${userId}?page=1`).then((response) => {
                setLoading(false);
                // console.log(response);
                const {data:{list:{data,total,current_page,last_page}}} = response;
                if (data.length > 0) {
                    setArtsList({
                        ...artsList,
                        page:current_page,
                        list:data,
                        hasMore:true,
                        maxPage:last_page,
                        totalArts:total,
                    });
                }
            }).catch(error => {
                console.log(error.response);
            });
        }
        getArtsList();
    },[userId]);

    const fetchMoreData = async () => {
        if (artsList.page <= artsList.maxPage) {
            setLoading(true);
            await Axios.get(`/public/api/community/resources/arts/get-list/${userId}?page=${artsList.page + 1}`).then((response) => {
                const {data:{list:{data,current_page}}} = response;
                setLoading(false);
                setArtsList({
                    ...artsList,
                    list:artsList.list.concat(data),
                    page:current_page,
                });
            }).catch(error => {
                console.log(error.response);
            });
        } else {
            setArtsList({
                ...artsList,
                hasMore:false,
            });
        }
    }

    return (
        <React.Fragment>
            <InfiniteScroll
                dataLength={artsList.list.length}
                next={fetchMoreData}
                hasMore={artsList.hasMore}
                className="arts-list"
            >
                {artsList.list.map((art,index) => (
                    <Link to={`/public/community/art/${art.id}`} key={index}>
                        <div className="art">
                            <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} />
                            {/* <img src={art.download_url} /> */}
                        </div>
                    </Link>
                ))}
            </InfiniteScroll>

            {loading && (
                <center className="loading-wrapper">
                    <img className="loading" src="https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"/>
                </center>
            )}

            {artsList.totalArts == artsList.list.length && (
                <div className="scroll-end">
                    <p className="text">
                        Chẳng còn gì để xem :)
                    </p>
                </div>
            )}
        </React.Fragment>
    );
}

export default ArtsList;