import React, { useEffect, useReducer, useRef, useState } from 'react';
import classnames from 'classnames';
import Axios from 'axios';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import FullUserInfo from './FullUserInfo';
import LoadingSpinner from '../../../../../LoadingSpinner';
import AddEditForm from './AddEditForm';
import { useDispatch } from 'react-redux';
import { setAnnouncerMessage } from '../../../../../../../store/admin/announcer';
import { showConfirmationBox } from '../../../../../../../store/admin/confirmation_box';

function List() {
    // url hiện tại
    const { url } = useRouteMatch();

    // input ref
    const inputRef = useRef();

    // input debouncing
    let debounce = null;

    // dispatch
    const dispatch = useDispatch();

    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    // Toggle tìm kiếm 
    const [searchToggle,setSearchToggle] = useState(false);

    // filter danh sách
    const [filter,setFilter] = useState({
        date:'desc',
        role:'',
    });

    const [currentPage,setCurrentPage] = useState(1);
    const [maxPage,setMaxPage] = useState(null);

    // dữ liệu danh sách
    const [list,setList] = useState([]);

    // loading
    const [isLoading,setIsLoading] = useState(false);


    // keywords tìm kiếm
    const [searchInputValue,setSearchInputValue] = useState('');

    // người dùng được chọn
    const [selectedUser,setSelectedUser] = useState({});

    // xử lý cập nhật state tìm kiếm
    const handleSetInputValue = ({target:{value}}) => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
            setSearchInputValue(value);
        },250);
    }

    // xử lý chọn người dùng
    const handleSetSelectedUser = (user) => {
        setSelectedUser({...user});
    }

    const handleClearInput = () => {
        setSearchInputValue('');
        inputRef.current.value = '';
    }

    const handleSelectFilter = (event) => {
        switch (event.target.id) {
            case 'role': {
                setFilter({
                    ...filter,
                    role:event.target.value,
                });
                break;
            }

            case 'order': {
                setFilter({
                    ...filter,
                    date:event.target.value,
                });
                break;
            }

            default: break;
        }
    }

    useEffect(() => {
        setIsLoading(true);
        (async function() {
            // console.log(pagination.currentPage,pagination.maxPage)
            await Axios.get(`/public/api/admin/resources/users?api_token=${localStorage.authenticatedUserToken}&role=${filter.role}&date=${filter.date}&searchInput=${searchInputValue}&page=${currentPage}`).then(response => {
                const { list:{data,last_page} } = response.data;
                setMaxPage(last_page);
                if (last_page == 1) {
                    setCurrentPage(1);
                }

                setList([...data]);
                setIsLoading(false);
            }).catch(error => {
                console.log(error.response);
            })
        })();
    },[filter,searchInputValue,currentPage,_]);

    const handleDeleteUser = (id) => {
        dispatch(showConfirmationBox({
            title:'Thông báo',
            description: 'Bạn có muốn xóa người dùng này',
            callback: async () => {
                await Axios.delete(`/public/api/admin/resources/users/${id}?api_token=${localStorage.getItem('authenticatedUserToken')}`).then(response => {
                    const { message } = response.data;
                    dispatch(setAnnouncerMessage(message));
                    forceUpdate();
                }).catch(error => {
                    const { message } = error.response.data;
                    dispatch(setAnnouncerMessage(message));
                })
            }
        }));
    }

    const handlePageChange = (action) => {
        switch (action) {
            case 'prev': {
                if (currentPage > 1)
                setCurrentPage(currentPage - 1);
                break;
            }
            
            case 'next': {
                if (currentPage < maxPage)
                setCurrentPage(currentPage + 1);
                break;
            }
            
            default: break;
        }
    }
    
    // console.log(currentPage);
    return (
        <div className="list">
            <div className="header">
                <div className="flex-box">
                    <div className="button-wrapper" onClick={() => setSearchToggle(!searchToggle)}>
                        <button className="button button-crimson">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className={classnames("search-bar",{search_hidden:!searchToggle})}>
                        <input id="search-input" className="text-input" type="text" onChange={handleSetInputValue} ref={inputRef}/>
                        <div className="button-wrapper" onClick={handleClearInput}>
                            <button className="button button-crimson">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-box">
                    <div className="select">
                        <select id="role" onChange={handleSelectFilter}>
                            <option value="" defaultChecked>Tất cả</option>
                            <option value="user">Thành viên</option>
                            <option value="admin">Quản trị viên</option>
                        </select>
                    </div>
                    <div className="select">
                        <select id="order" onChange={handleSelectFilter}>
                            <option value="desc" defaultChecked>Mới nhất</option>
                            <option value="asc">Cũ nhất</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className="body">
                <div className="flex-box">
                    <div className="pagination">
                        <button className="button button-crimson" style={currentPage == 1 ? {
                            backgroundColor:'silver',
                        } : {}} onClick={() => handlePageChange('prev')}>Trước</button>
                        <button className="button button-crimson" style={currentPage == maxPage ? {
                            backgroundColor:'silver',
                        } : {}} onClick={() => handlePageChange('next')}>Sau</button>
                    </div>
                    <LoadingSpinner isLoading={isLoading}>
                        {list && list.map((user,index) => (
                            <div className={classnames('user',{selected:selectedUser.id == user.id})} key={index}>
                                <div className="user-info">
                                    <div className="profile-picture">
                                        {user.profile_picture == null ? <i className="fas fa-user"></i> : <img src={`/storage/app/public/profilePictures/${user.profile_picture}`}/>}
                                    </div>
                                    <div className="group-info">
                                        <div className="info firstname"><p>{user.firstname}</p></div>
                                        <div className="info lastname"><p>{user.lastname}</p></div>
                                        <div className="info username"><p>{user.username}</p></div>
                                        <div className="info email"><p>{user.email}</p></div>
                                    </div>
                                    <div className="group-info extra">
                                        <div className="info firstname"><p>{user.role == 'admin' ? 'Quản trị viên' : 'Thành viên'}</p></div>
                                        <div className="info lastname"><p>{user.api_token == null ? 'Chưa cấp' : 'Đã cấp'}</p></div>
                                    </div>
                                </div>
                                <div className="action">
                                    <Link to={url + `/revoke/${user.id}`}>
                                        <button className="button button-crimson">
                                            <i className="fas fa-unlink"></i> Token
                                        </button>
                                    </Link>
                                    <Link to={url + `/edit/${user.id}`}>
                                        <button className="button button-crimson">
                                            <i className="fas fa-cog"></i>
                                        </button>
                                    </Link>

                                    <button className="button button-crimson" onClick={() => handleDeleteUser(user.id)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                    
                                    <Link to={url + `/show/${user.id}`}>
                                        <button className="button button-crimson" onClick={() => handleSetSelectedUser(user)}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </LoadingSpinner>
                </div>

                <div className="flex-box">
                    <Switch>
                        <Route path={url + `/show/:id`}>
                            <FullUserInfo/>
                        </Route>
                        <Route path={url + `/add`}>
                            <AddEditForm type="add"/>
                        </Route>
                        <Route path={url + `/edit/:id`}>
                            <AddEditForm type="edit" userInfo={selectedUser}/>
                        </Route>    
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default List;