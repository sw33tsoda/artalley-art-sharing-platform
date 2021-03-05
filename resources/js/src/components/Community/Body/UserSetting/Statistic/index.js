import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ArtsStats from './ArtsStats';
import CommentsStats from './CommentsStats';
import ShowcasesStats from './ShowcasesStats';

function Statistic({user}) {
    const [statsData,setStatsData] = useState({});
    useEffect(() => {
        const getUserStats = async () => {
            await Axios.get(`/public/api/community/resources/users/${user.id}?api_token=${localStorage.getItem('authenticatedUserToken')}`).then(response => {
                const {stats} = response.data;
                setStatsData({...stats});
                console.log(stats);
            }).catch(error => {
                console.log(error.response);
            });
        }

        getUserStats();
    },[]);

    return (
        <div className="statistic">
            <ArtsStats data={statsData.arts}/>
            <ShowcasesStats data={statsData.showcases}/>
            <CommentsStats data={statsData.comments}/>
        </div>
    );
}

export default Statistic;