import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import Axios from 'axios';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import FullUserInfo from './FullUserInfo';
import LoadingSpinner from '../../../../../LoadingSpinner';
import AddEditForm from './AddEditForm';

function List() {

    const { url } = useRouteMatch();

    const inputRef = useRef();

    let debounce = null;

    // Toggle tìm kiếm 
    const [searchToggle,setSearchToggle] = useState(false);

    // filter danh sách
    const [filter,setFilter] = useState({
        date:'desc',
        role:'',
    });

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

    console.log(selectedUser);

    useEffect(() => {
        setIsLoading(true);
        (async function() {
            await Axios.get(`/public/api/admin/resources/users?api_token=${localStorage.authenticatedUserToken}&role=${filter.role}&date=${filter.date}&searchInput=${searchInputValue}`).then(response => {
                const { list:{data} } = response.data;
                setList([...data]);
                setIsLoading(false);
            }).catch(error => {
                console.log(error.response);
            })
        })();
    },[filter,searchInputValue]);

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
            </div>

            <div className="body">
                <div className="flex-box">
                    <LoadingSpinner isLoading={isLoading}>
                        {list && list.map((user,index) => (
                            <div className={classnames('user',{selected:selectedUser.id == user.id})} key={index}>
                                <div className="user-info">
                                    <div className="profile-picture">
                                        <img src={`/storage/app/public/profilePictures/${user.profile_picture}`}/>
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
                                    <Link to={`/public/admin/users/delete/${user.id}`}>
                                        <button className="button button-crimson">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </Link>
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