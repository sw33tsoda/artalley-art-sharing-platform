import React, { useState,useEffect } from 'react'
import ArtsScrollList from './ArtsScrollList';
import classnames from 'classnames';
import Axios from 'axios';


function Content() {
    const [layout,setLayout] = useState('grid');
    const [dimensionsList,setDimensionsList] = useState({
        list:[],
        selected:null,
    });

    console.log(dimensionsList);

    useEffect(() => {
        const getDimensionsList = async () => {
            await Axios.get('/public/api/community/resources/interface/get-dimensions-list').then(response => {
                const {data:{list}} = response;
                setDimensionsList({
                    ...dimensionsList,
                    list:list,
                });
            }).catch(error => {
                console.log(error.response);
            });
        }
        getDimensionsList();
    },[]);

    const handleDimensionFilterOnChange = (selectedId) => {
        setDimensionsList({
            ...dimensionsList,
            selected:selectedId,
        });
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
            <ArtsScrollList layout={layout} dimension={dimensionsList.selected}/>
        </div>
    );
}

export default Content;