import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import DragScroll from 'react-indiana-drag-scroll';
import { Link } from 'react-router-dom';

function TrendingArtsSlider(props) {
    const {artsSlideType} = props;
    const [artsSlideList,setArtsSlideList] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const getSlideArts = async () => {
            await Axios.get(`/public/api/community/resources/public/get-slide-arts-list/${artsSlideType}`).then(response => {
                const {data:{list}} = response;
                // console.log(response.data);
                setArtsSlideList(list);
                setLoading(false);  
            }).catch(error => {
                console.log(error.response);
            });
        }
        getSlideArts();
    },[artsSlideType]);

    return (
        <DragScroll className="trending-arts">
            {!loading ? artsSlideList.length > 0 ? (
                <div className="list">
                    {artsSlideList.map((art,index) => (
                        <Link to={`/public/community/art/${art.id}`} key={index}>
                            <div className="item" key={index}>
                                <img src={`/storage/app/public/community/${art.user_id}/arts/${art.art}`}/>
                                {artsSlideType == 'trending' && (
                                    <div className="trending-overlay">
                                        <p className="rank">{index + 1}</p>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <h1 className="no-item">Trống</h1>
            ) : (
                <img className="loading" src="https://4.bp.blogspot.com/-a4arXx0z1xQ/VuM0S587YfI/AAAAAAAAAOk/jQf7UpsN93ol-qZYM4CuibUSCG8deiejg/s1600/loading.gif"/>
            )}
        </DragScroll>
    );
}

export default TrendingArtsSlider;