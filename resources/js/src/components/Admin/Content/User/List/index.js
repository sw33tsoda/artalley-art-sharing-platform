import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { setList } from '../../../../../store/admin/users';
import AddEditForm from './AddEditForm';
import queryString from 'query-string';
import Pagination from '../../Pagination';
import AlertModal from '../../AlertModal';
import { setAnnouncerMessage } from '../../../../../store/admin/announcer';

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
            const newFilter = {
                ...filter,
                searchInput: value,
            }
            setFilter(newFilter);
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
    const handlePaginationChange = async (pageUrl) => {
        const { page } = queryString.parseUrl(pageUrl).query;
        const newFilter = {
            ...filter,
            page:page,
        }
        setFilter(newFilter);
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
        const queryParams = queryString.stringify({
            id: isDeletingUser.userInfo.id,
            api_token: apiToken
        });
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
    
    return (
        <div className="list">
            <div className="filter">
                <input className="search" type="text" placeholder="TÌM KIẾM..." onChange={handleSearchInput}/>
                <div className="select">
                    <select className="sort-by-role" onChange={handleSelectOnChange}>
                        <option value="">Tât cả</option>
                        <option value="admin">Quản trị viên</option>
                        <option value="user">Thành viên</option>
                    </select>
                    <select className="sort-by-date" onChange={handleSelectOnChange}>
                        <option value="desc">Mới nhất</option>
                        <option value="asc">Cũ nhất</option>
                    </select>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <td>Hình đại diện</td>
                        <td className="id">Mã</td>
                        <td className="firstname">Tên</td>
                        <td className="lastname">Họ</td>
                        <td className="username">Tên người dùng</td>
                        <td className="email">Địa chỉ Email</td>
                        <td>Vai trò</td>
                        <td>Token</td>
                        <td className="date">Ngày tạo</td>
                        <td className="date">Đăng nhập mới</td>
                        <td className="action">Hành động</td>
                    </tr>
                </thead>
                <tbody>
                    {list ? list.map((user,index) => (
                        <tr key={index}>
                            <td className="profile_picture"><img src={user.profile_picture ? `/storage/app/public/profilePictures/${user.profile_picture}` : 'https://play-lh.googleusercontent.com/RL_MLPh9TeGBK4x2PKRGdkp8-OOh6wONlTIj2cHtspxuLODhhtclF0D5gXhl89iPmCo'} width="35px"/></td>
                            <td className="id">{user.id}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role == 'admin' ? 'Quản trị viên' : 'Người dùng'}</td>
                            <td>{user.api_token == null ? 'Chưa được cấp' : 'Đang sử dụng'}</td>
                            <td><Moment format="h:m:s:A DD/MM/YYYY">{user.created_at}</Moment></td>
                            <td><Moment format="h:m:s:A DD/MM/YYYY">{user.updated_at}</Moment></td>
                            <td className="action"><a href="# " onClick={() => setAddEditFormToggle({...addEditFormToggle,edit:true,userInfo:user})}>Sửa</a> <a href="# " onClick={() => handleDeleteUserModal(user)}>Xóa</a></td>
                        </tr>
                    )) : <tr><td className="no-record" colSpan="11"><p>KHÔNG CÓ KẾT QUẢ NÀO</p></td></tr>}
                </tbody>
            </table>
            <div className="pagination-and-adduser">
                <Pagination links={pagination} pageChange={handlePaginationChange}/>
                <a href="# " className="add-new-member" onClick={() => setAddEditFormToggle({...addEditFormToggle,add:true})}>THÊM NGƯỜI DÙNG</a>
            </div>

            {addEditFormToggle.add && <Draggable>
                <div className="add-user">
                    <h1>THÊM NGƯỜI DÙNG</h1>
                    <AddEditForm closeAddEditForm={handleCloseAddEditForm} formType='add' listRefresh={handleListRefresh}/>
                </div>
            </Draggable>}

            {addEditFormToggle.edit && <Draggable>
                <div className="add-user">
                    <h1>SỬA NGƯỜI DÙNG</h1>
                    <AddEditForm closeAddEditForm={handleCloseAddEditForm} formType='edit' listRefresh={handleListRefresh} userInfo={addEditFormToggle.userInfo}/>
                </div>
            </Draggable>}

            {isDeletingUser.isActive && <Draggable>
                <div className="delete-modal">
                    <AlertModal title="Nhắc nhở" body={`Bạn có chấp nhận xóa người dùng này (${isDeletingUser.userInfo.username})`} userInfo={isDeletingUser.userInfo} submit={handleDeleteUser} closeModal={handleCloseDeleteUserModal}/>
                </div>
            </Draggable>}
        </div>
    );
}

export default List;