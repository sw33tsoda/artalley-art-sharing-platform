import React, { useState,useEffect } from 'react'
import ArtsScrollList from './ArtsScrollList';
import classnames from 'classnames';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectDimension, setChannelsList, setDimensionsList } from '../../../../../store/community/filter';


function Content() {
    const [layout,setLayout] = useState('grid');
    const dispatch = useDispatch();
    const {dimensions:dimensionsList} = useSelector(state => state.community_filter);

    useEffect(() => {
        const getDimensionsList = async () => {
            await Axios.get('/public/api/community/resources/interface/get-filters-list').then(response => {
                const {data:{dimensionsList,channelsList}} = response;
                dispatch(setDimensionsList(dimensionsList));
                dispatch(setChannelsList(channelsList));
            }).catch(error => {
                console.log(error.response);
            });
        }
        getDimensionsList();
    },[]);

    const handleDimensionFilterOnChange = (selectedId) => {
        dispatch(selectDimension(selectedId));
    }

    return (
        <div className="content">
            <div className="layout-and-filter">
                <div className="layout-bar">
                    <div className={classnames('layout',{active:layout == 'grid'})} onClick={() => setLayout('grid')}>
                        <p><i className="fas fa-th-large"></i> Grid</p>
                    </div>
                    <div className={classnames('layout',{active:layout == 'list'})} onClick={() => setLayout('list')}>
                        <p><i className="fas fa-th-list"></i> List</p>
                    </div>
                </div>
                <div className="filter-bar">
                    <div className={classnames("filter",{active:dimensionsList.selected == null})} onClick={() => handleDimensionFilterOnChange(null)}>
                        <p>Tất cả</p>
                    </div>
                    {dimensionsList.list.length > 0 && dimensionsList.list.map((dimension,index) => (
                        <div className={classnames("filter",{active:dimension.id == dimensionsList.selected})} key={index} onClick={() => handleDimensionFilterOnChange(dimension.id)}>
                            <p>{dimension.dimensional}</p>
                        </div>
                    ))}
                </div>
            </div>
            <ArtsScrollList layout={layout}/>
        </div>
    );
}

export default Content;