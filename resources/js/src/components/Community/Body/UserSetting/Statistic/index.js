import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../../../Etc/Loading';
import ArtsStats from './ArtsStats';
import CommentsStats from './CommentsStats';
import ShowcasesStats from './ShowcasesStats';

function Statistic({user}) {
    const [statsData,setStatsData] = useState({});
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            await Axios.get(`/public/api/community/resources/users/${user.id}?api_token=${localStorage.getItem('authenticatedUserToken')}`).then(response => {
                const {stats} = response.data;
                setStatsData({...stats});
                setLoading(false);
            }).catch(error => {
                console.log(error.response);
            });
        })();
    },[]);

    return (
        <Loading isLoading={loading} width="50px" height="50px" type="spinner">
            <div className="statistic">
                <ArtsStats data={statsData.arts}/>
                <ShowcasesStats data={statsData.showcases}/>
                <CommentsStats data={statsData.comments}/>
            </div>
        </Loading>
    );
}

export default Statistic;