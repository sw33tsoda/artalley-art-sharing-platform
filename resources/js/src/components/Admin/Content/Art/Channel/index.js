import Axios from 'axios';
import { FastField, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ArtChannelValidaitonSchema } from '../../../../Auth/Validation';
import FileUploader from '../../../../CustomFields/FileUploader';
import InputField from '../../../../CustomFields/InputField';
import _ from 'lodash';
import { setAnnouncerMessage } from '../../../../../store/admin/announcer';
import { useDispatch } from 'react-redux';
import Draggable from 'react-draggable';
import Moment from 'react-moment';
import Pagination from '../../Pagination';
import queryString from 'query-string';

function Channel() {
    // State danh sách
    const [list,setList] = useState([]);
    // Trigger List Refresh
    const [listRefresh,setListRefresh] = useState(false);
    // Form Toggle
    const [addFormToggle,setAddFormToggle] = useState(false);
    const dispatch = useDispatch();
    // Phân trang
    const [pagination,setPagination] = useState([]);
    // Lọc (filter)    
    const [filter,setFilter] = useState({
        searchInput:'',
        date:'desc',
        page:1,
    });

    const initialValues = {
        channel_name : '',
        thumbnail : '',
    }
    
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
    
    // Xử lý File
    const [file,setFile] = useState({});
    const [preview,setPreview] = useState('');
    const resetFile = () => {
        setFile({});
        setPreview('');
    }

    if (!_.isEmpty(file.name)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreview(reader.result);
        }
    }

    const handleSetFile = (event) => {
        setFile(event.target.files[0]);
    }

    // Xử lý Form
    const handleSubmitForm = (values,{resetForm}) => {
        const apiToken = localStorage.getItem('authenticatedUserToken');
        const data = new FormData();
        data.append('channel_name',values.channel_name);
        if (!_.isEmpty(file.name)) {
            data.append('thumbnail',file);
        }
        Axios.post(`/public/api/admin/resources/art_channels?api_token=${apiToken}`,data).then(response => {
            const {data:{message}} = response;
            dispatch(setAnnouncerMessage(message));
            resetForm();
            resetFile();
            setListRefresh(!listRefresh);
        }).catch(error => {
            const {data:{errors,message}} = error.response;
            if (!_.isEmpty(errors)) {
                dispatch(setAnnouncerMessage(errors[Object.keys(errors)[0]]));
            } else {
                dispatch(setAnnouncerMessage(message));
            }
        });
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
        setFilter({
            ...filter,
            searchInput:value,
        });
    }
    return (
        <div className="channel">
            {addFormToggle && <Draggable handle='.add-channel-title'>
                <div className="admin-form art-channels-form">
                    <h1 className="add-channel-title">THÊM LOẠI ẢNH</h1>
                    <Formik validationSchema={ArtChannelValidaitonSchema} initialValues={initialValues} onSubmit={handleSubmitForm}>
                        {({handleSubmit}) => {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <FastField
                                        name='channel_name'
                                        component={InputField}

                                        label='Tên thể loại'
                                        labelClassName='label'
                                        type='text'
                                        placeholder='Nhập tên thể loại'
                                        disabled={false}
                                    />

                                    <FastField
                                        name='thumbnail'
                                        component={FileUploader}

                                        label='Ảnh đại diện'
                                        labelClassName='label'
                                        type='file'
                                        disabled={false}
                                        setFile={handleSetFile}
                                    />

                                    {preview !== '' ? <img className="profile-picture-preview" src={preview} width="35px"/> : <p className="no-file">Chưa có ảnh</p>}

                                    <div className="form-buttons-group">
                                        <button type="submit">THÊM</button><button onClick={() => setAddFormToggle(false)}>ĐÓNG</button>
                                    </div>
                                </form>
                            )
                        }}
                    </Formik>
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
                        <div className="channel" style={{backgroundImage:`url(${thumbnail})`}} key={index}>
                            <p className="name">{channel.channel_name}</p>
                            <p className="slug">{channel.channel_slug}</p>
                            <p className="date" ><Moment format="h:mm:s A DD/MM/YYYY">{channel.created_at}</Moment></p>
                        </div>
                    );
                })}
            </div>

            <div className="pagination-and-add-form">
                <Pagination links={pagination} pageChange={handlePageChange}/>
                <a className="show-add-channel-form" href="# " onClick={() => setAddFormToggle(true)}>THÊM LOẠI ẢNH</a>
            </div>
            
        </div>
    );
}

export default Channel;