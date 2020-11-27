import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { setList } from '../../../../../store/admin/users';
import AddEditForm from './AddEditForm';
import queryString from 'query-string';
import Pagination from '../../Pagination';
import AlertModal from '../../AlertModal';
import { setAnnouncerMessage } from '../../../../../store/admin/announcer';
import _ from 'lodash';
import TableList from './TableList';


function List() {
    const dispatch = useDispatch();

    // Lấy thông tin đăng nhập // Chưa dùng
    // const { authenticatedUser } = useSelector(state => state.auth);

    // Danh sách người dùng
    const { list } = useSelector(state => state.admin_users);

    // Trigger refresh
    const [listRefresh,setListRefresh] = useState(true);

    // Toggle Form thêm người dùng
    const [addEditFormToggle,setAddEditFormToggle] = useState({
        add: false,
        edit: false,
        userInfo: {},
    });
    // Toggle Delete Modal
    const [isDeletingUser,setIsDeletingUser] = useState({
        isActive : false,
        userInfo : {},
    });

    // Lọc
    const [filter,setFilter] = useState({
        searchInput : '',
        date:'desc',
        role:'',
        page:1
    });

    // Phân trang
    const [pagination,setPagination] = useState([]);

    console.log(filter);

    let debounce = null;
    useEffect(() => {
        const getUsersList = async () => {
            // Lấy Token từ Local Storage
            const apiToken = localStorage.getItem('authenticatedUserToken');

            // Chuỗi truy vấn
            const queryParams = queryString.stringify({
                ...filter,
                api_token: apiToken,
            });

            // Gọi API
            Axios.get(`/public/api/admin/resources/users?${queryParams}`).then(response => {
                const {data:{list:{data,links}}} = response;
                console.log(response.data.list,queryParams);
                // Phân trang
                setPagination(links);

                // Lưu vào Global State
                const action = setList(data);
                dispatch(action);
            }).catch(error => {
                console.log(error);
            })
        }
        getUsersList();

    },[filter,listRefresh]);

    console.log(filter);

    // Xử lý gọi refresh
    const handleListRefresh = async () => {
        setListRefresh(!listRefresh);
    }

    // Xử lý lọc
    const handleSelectOnChange = async (event) => {
        let newFilter;
        const {value} = event.target;
        if (event.target.className == 'sort-by-date') {
            newFilter = {
                ...filter,
                date:value,
            }
        } else if (event.target.className == 'sort-by-role') {
            newFilter = {
                ...filter,
                role:value,
            }
        }
        setFilter({...newFilter});
    }

    // Xử lý tìm kiếm
    const handleSearchInput = async (event) => {
        clearTimeout(debounce);
        const {value} = event.target;
        debounce = setTimeout(() => {
            setFilter({
                ...filter,
                searchInput: value,
            });
        },250);
    }

    // Xử lý đóng Form
    const handleCloseAddEditForm = async (formType) => {
        const toggleSettings = {
            ...addEditFormToggle,
        }
        toggleSettings[formType] = false;
        setAddEditFormToggle({...toggleSettings});
    }

    // Xử lý chuyển trang
    const handlePageChange = async (pageUrl) => {
        const { page } = queryString.parseUrl(pageUrl).query;
        setFilter({
            ...filter,
            page:page,
        });
    }

    // Xử lý bật Modal
    const handleDeleteUserModal = async (user) => {
        setIsDeletingUser({
            isActive:true,
            userInfo: {...user}
        });
    }

    // Xử lý đóng Modal
    const handleCloseDeleteUserModal = async (user) => {
        setIsDeletingUser({
            ...isDeletingUser,
            isActive:false,
        });
    }

    // Xử lý xóa người dùng
    const handleDeleteUser = async () => {
        const apiToken = localStorage.getItem('authenticatedUserToken');
        Axios.delete(`/public/api/admin/resources/users/${isDeletingUser.userInfo.id}?api_token=${apiToken}`).then(response => {
            const {data:{message}} = response;
            const action = setAnnouncerMessage(message);
            dispatch(action);
            setListRefresh(!listRefresh);
            setIsDeletingUser({
                isActive:false,
                userInfo:{},
            });
        }).catch(error => {
            console.log(error);
        });
    }

    const handleSetAddEditFormToggle = async (userInfo) => {
        setAddEditFormToggle({
            ...addEditFormToggle,
            edit:true,
            userInfo:userInfo
        });
    }
    
    return (
        <div className="users-list">
            <div className="filter">
                <input className="search" type="text" placeholder="TÌM KIẾM..." onChange={handleSearchInput}/>
                <div className="select">
                    <select className="sort-by-role" onChange={handleSelectOnChange}>
                        <option value="">Tât cả</option>
                        <option value="admin">Quản trị viên</option>
                        <option value="user">Người dùng</option>
                    </select>
                    <select className="sort-by-date" onChange={handleSelectOnChange}>
                        <option value="desc">Mới nhất</option>
                        <option value="asc">Cũ nhất</option>
                    </select>
                </div>
            </div>

            <TableList list={list} deleteUserModal={handleDeleteUserModal} setAddEditFormToggle={handleSetAddEditFormToggle}/>
            
            <div className="pagination-and-adduser">
                <Pagination links={pagination} pageChange={handlePageChange}/>
                <a href="# " className="add-new-member" onClick={() => setAddEditFormToggle({...addEditFormToggle,add:true})}>THÊM NGƯỜI DÙNG</a>
            </div>

            {addEditFormToggle.add && <Draggable handle='.add-user-title'>
                <div className="admin-form user-crud">
                    <h1 className="add-user-title handle">THÊM NGƯỜI DÙNG</h1>
                    <AddEditForm closeAddEditForm={handleCloseAddEditForm} formType='add' listRefresh={handleListRefresh}/>
                </div>
            </Draggable>}

            {addEditFormToggle.edit && <Draggable handle='.edit-user-title'>
                <div className="admin-form user-crud">
                    <h1 className="edit-user-title handle">SỬA NGƯỜI DÙNG</h1>
                    <AddEditForm closeAddEditForm={handleCloseAddEditForm} formType='edit' listRefresh={handleListRefresh} userInfo={addEditFormToggle.userInfo}/>
                </div>
            </Draggable>}

            {isDeletingUser.isActive && <Draggable handle='.delete-user'>
                <div className="admin-form user-crud">
                    <AlertModal headerClassName={'delete-user handle'} title="Nhắc nhở" body={`Bạn có chấp nhận xóa người dùng này (${isDeletingUser.userInfo.username})`} userInfo={isDeletingUser.userInfo} submit={handleDeleteUser} closeModal={handleCloseDeleteUserModal}/>
                </div>
            </Draggable>}
        </div>
    );
}

export default List;