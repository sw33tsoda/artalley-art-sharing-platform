import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { setAnnouncerMessage } from '../../../../../store/admin/announcer';
import { useDispatch } from 'react-redux';
import Draggable from 'react-draggable';
import Moment from 'react-moment';
import Pagination from '../../Pagination';
import queryString from 'query-string';
import AddEditForm from './AddEditForm';

function Channel() {
    // State danh sách
    const [list,setList] = useState([]);
    // Trigger List Refresh
    const [listRefresh,setListRefresh] = useState(false);
    // Form Toggle
    const [formToggle,setFormToggle] = useState({
        add:false,
        edit:false,
        channelInfo:{}
    });

    // Phân trang
    const [pagination,setPagination] = useState([]);
    // Lọc (filter)    
    const [filter,setFilter] = useState({
        searchInput:'',
        date:'desc',
        page:1,
    });
    // Debounce
    let debounce = null;
    
    useEffect(() => {
        const getArtChannelsList = async () => {
            const apiToken = localStorage.getItem('authenticatedUserToken');
            const queryParams = queryString.stringify({
                ...filter,
                api_token:apiToken,
            });
            await Axios.get(`/public/api/admin/resources/art_channels?${queryParams}`).then(response => {
                const {data:{list:{data,links}}} = response;
                setList(data);
                setPagination(links);
            }).catch(error => {
                const {data:{message}} = error.response;
                dispatch(setAnnouncerMessage(message));
            })
        }
        getArtChannelsList();
    },[listRefresh,filter]);

    // Xử lý Refresh
    const handleSetListRefresh = () => {
        setListRefresh(!listRefresh);
    }

    // Xử lý Form Toggle
    const handleFormToggle = (formType,toggle,channelInfo) => {
        const toggleSettings = formToggle;
        toggleSettings[formType] = toggle == 'open' ? true : false;
        if (!_.isEmpty(channelInfo)) {
            toggleSettings.channelInfo = channelInfo;
        }
        setFormToggle({...toggleSettings});
    }

    // Xử lý chuyển trang
    const handlePageChange = (pageUrl) => {
        const { page } = queryString.parseUrl(pageUrl).query;
        setFilter({
            ...filter,
            page:page,
        });
    }

    // Xử lý lọc
    const handleOrderByDate = (event) => {
        const { value } = event.target;
        setFilter({
            ...filter,
            date:value,
        });
    }

    // Xử lý tìm kiếm
    const handleSearchInput = (event) => {
        const { value } = event.target;
        clearTimeout(debounce);
        debounce = setTimeout(() => {
            setFilter({
                ...filter,
                searchInput:value,
            });
        },250);
    }

    return (
        <div className="channel">
            {formToggle.add && <Draggable handle='#add-channel'>
                <div className="admin-form art-channels-form">
                    <h1 id="add-channel" className="add-channel-title">THÊM LOẠI ẢNH</h1>
                    <AddEditForm className="grab-area" listRefresh={handleSetListRefresh} formToggle={handleFormToggle} formType="add"/>
                </div>
            </Draggable>}

            {formToggle.edit && <Draggable handle='#edit-channel'>
                <div className="admin-form art-channels-form">
                    <h1 id="edit-channel" className="add-channel-title">SỬA LOẠI ẢNH</h1>
                    <AddEditForm listRefresh={handleSetListRefresh} formToggle={handleFormToggle} formType="edit" channelInfo={formToggle.channelInfo}/>
                </div>
            </Draggable>}
            
            <div className="filter">
                <input className="search" type="text" placeholder="TÌM KIẾM..." onChange={handleSearchInput}/>
                <div className="select">
                    <select onChange={handleOrderByDate} defaultValue={filter.date}>
                        <option value={"desc"}>MỚI NHẤT</option>
                        <option value={"asc"}>CŨ NHẤT</option>
                    </select>
                </div>
            </div>
            <div className="art-channels-list">
                {!_.isEmpty(list) && list.map((channel,index) => {
                    const thumbnail = channel.thumbnail == null ? 'https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200' : `/storage/app/public/artChannelThumbnails/${channel.thumbnail}`;
                    return (
                        <div onClick={() => handleFormToggle('edit','open',channel)} className="channel" style={{backgroundImage:`url(${thumbnail})`}} key={index}>
                            <p className="name">{channel.channel_name}</p>
                            <p className="slug">{channel.channel_slug}</p>
                            <p className="date" ><Moment format="h:mm:s A DD/MM/YYYY">{channel.created_at}</Moment></p>
                        </div>
                    );
                })}
            </div>

            <div className="pagination-and-add-form">
                <Pagination links={pagination} pageChange={handlePageChange}/>
                <a className="show-add-channel-form" href="# " onClick={() => handleFormToggle('add','open')}>THÊM LOẠI ẢNH</a>
            </div>
            
        </div>
    );
}

export default Channel;