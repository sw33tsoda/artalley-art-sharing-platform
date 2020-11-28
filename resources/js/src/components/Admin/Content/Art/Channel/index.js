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
import AlertModal from '../../AlertModal';

function Channel() {
    const dispatch = useDispatch();
    // State danh sách
    const [list,setList] = useState([]);
    // Trigger List Refresh
    const [listRefresh,setListRefresh] = useState(false);
    // Form Toggle
    const [formToggle,setFormToggle] = useState({
        add:{
            isOpen:false,
        },
        edit:{
            isOpen:false,
            data:{},
        },
        delete:{
            isOpen:false,
            data:{},
        }
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
    const handleFormToggle = (formType,toggle,data) => {
        const toggleSettings = formToggle;
        toggleSettings[formType].isOpen = toggle == 'open' ? true : false;
        if (!_.isEmpty(data)) {
            toggleSettings[formType].data = {...data};
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

    // Xử lý xóa
    const handleDeleteChannel = async () => {
        const apiToken = localStorage.getItem('authenticatedUserToken');
        await Axios.delete(`/public/api/admin/resources/art_channels/${formToggle.delete.data.id}?api_token=${apiToken}`).then(response => {
            const {data:{message}} = response;
            dispatch(setAnnouncerMessage(message));
            handleSetListRefresh();
            handleFormToggle('delete','close');
        }).catch(error => {
            console.log(error.response);
            const {data:{message}} = error.response;
            dispatch(setAnnouncerMessage(message));
        });
    }

    return (
        <div className="channel">
            {formToggle.add.isOpen && <Draggable handle='#add-channel'>
                <div className="admin-form art-channels-form">
                    <h1 id="add-channel" className="add-channel-title">THÊM LOẠI ẢNH</h1>
                    <AddEditForm className="grab-area" listRefresh={handleSetListRefresh} formToggle={handleFormToggle} formType="add"/>
                </div>
            </Draggable>}

            {formToggle.edit.isOpen && <Draggable handle='#edit-channel'>
                <div className="admin-form art-channels-form">
                    <h1 id="edit-channel" className="add-channel-title">SỬA LOẠI ẢNH</h1>
                    <AddEditForm listRefresh={handleSetListRefresh} formToggle={handleFormToggle} formType="edit" channelInfo={formToggle.edit.data}/>
                </div>
            </Draggable>}

            {formToggle.delete.isOpen && <Draggable handle='.delete-channel'>
                <div className="admin-form user-crud">
                    <AlertModal headerClassName={'delete-channel handle'} title="Nhắc nhở" body={`Bạn có chấp nhận xóa loại ảnh này (${formToggle.delete.data.channel_slug})`} submit={() => handleDeleteChannel()} closeModal={() => handleFormToggle('delete','close')}/>
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
            {!_.isEmpty(list) ? (
                <div className="art-channels-list">
                    {list.map((channel,index) => {
                        const thumbnail = channel.thumbnail == null ? 'https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200' : `/storage/app/public/artChannelThumbnails/${channel.thumbnail}`;
                        return (
                            <div className="channel" style={{backgroundImage:`url(${thumbnail})`}} key={index}>
                                <p className="name">{channel.channel_name}</p>
                                <p className="slug">{channel.channel_slug}</p>
                                <p className="edit" onClick={() => handleFormToggle('edit','open',channel)}>Sửa</p>
                                <p className="delete" onClick={() => handleFormToggle('delete','open',channel)}>Xóa</p>
                                <p className="date" ><Moment format="h:mm:s A DD/MM/YYYY">{channel.created_at}</Moment></p>
                            </div>
                        );
                    })}
                </div>
            )
            : <p className="no-record">KHÔNG CÓ KẾT QUẢ NÀO</p>}

            <div className="pagination-and-add-form">
                <Pagination links={pagination} pageChange={handlePageChange}/>
                <a className="show-add-channel-form" href="# " onClick={() => handleFormToggle('add','open')}>THÊM LOẠI ẢNH</a>
            </div>
            
        </div>
    );
}

export default Channel;