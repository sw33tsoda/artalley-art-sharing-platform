import React, { useEffect, useState } from 'react'
import classnames from 'classnames';
import InfiniteScroll from 'react-infinite-scroll-component';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


function ArtsScrollList(props) {
    const { layout } = props;
    const {dimensions:{selected:selectedDimension}} = useSelector(state => state.community_filter);
    const {channels:{selected:selectedChannel}} = useSelector(state => state.community_filter);
    // console.log(selectedChannel,selectedDimension);
    const [artsList,setArtsList] = useState({
        list:[],
        page:1,
        hasMore:true,
        maxPage:0,
        totalArts:null,
    });
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const getArtsList = async () => {
            setLoading(true);
            await Axios.get(`/public/api/community/resources/interface/get-arts-list/${selectedDimension}-${selectedChannel}?page=1`).then(response => {
                // console.log('useeffect response',response);
                const {data:{list:{data,total,last_page,current_page}}} = response;
                setArtsList({
                    ...artsList,
                    page:current_page,
                    list:data,
                    maxPage:last_page,
                    totalArts:total,
                    hasMore:true,
                });
                setLoading(false);
            }).catch(error =>{
                console.log(error.response);
            });
        }
        getArtsList();
    },[selectedDimension,selectedChannel]);

    const fetchMoreArtsData = async () => {
        if (artsList.maxPage > artsList.page) {
            setLoading(true);
            await Axios.get(`/public/api/community/resources/interface/get-arts-list/${selectedDimension}-${selectedChannel}?page=${artsList.page + 1}`).then(response => {
                const {data:{list:{current_page,data:newList}}} = response;
                setArtsList({
                    ...artsList,
                    list:artsList.list.concat(newList),
                    page:current_page,
                });
                setLoading(false);
            }).catch(error => {
                console.log(error.response);
            })
        } else {
            setArtsList({
                ...artsList,
                hasMore:false,
            })
        }
    }

    // console.log(artsList);
    return (
        <div className="arts-list">
            <InfiniteScroll
                dataLength={artsList.list && artsList.list.length}
                next={fetchMoreArtsData}
                hasMore={artsList.hasMore}
                className={classnames('list',{
                    list_layout: layout == 'list',
                    grid_layout: layout == 'grid',
                })}
            >
                {artsList.list.map((art,index) => (
                    <Link to={`/public/community/art/${art.id}`} key={index}>
                        <div className="wrapper">
                            <div className="art">
                                <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`} />
                                {/* <img src={art.download_url} /> */}
                            </div>
                            <div className="info">
                                <p className="title">{art.title}</p>
                                <p className="caption">{art.caption}</p>
                            </div>
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
        </div>
    );
}

export default ArtsScrollList;