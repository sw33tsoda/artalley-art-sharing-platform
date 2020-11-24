import React from 'react';
import Moment from 'react-moment';
import _ from 'lodash';

function TableList(props) {
    const { list,deleteUserModal,setAddEditFormToggle } = props;
    return (
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
                {!_.isEmpty(list) ? list.map((user,index) => (
                    <tr key={index}>
                        <td className="profile_picture"><img src={user.profile_picture ? `/storage/app/public/profilePictures/${user.profile_picture}` : 'https://play-lh.googleusercontent.com/RL_MLPh9TeGBK4x2PKRGdkp8-OOh6wONlTIj2cHtspxuLODhhtclF0D5gXhl89iPmCo'} width="35px" height="35px"/></td>
                        <td className="id">{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role == 'admin' ? 'Quản trị viên' : 'Người dùng'}</td>
                        <td>{user.api_token == null ? 'Chưa được cấp' : 'Đang sử dụng'}</td>
                        <td><Moment format="h:m:s:A DD/MM/YYYY">{user.created_at}</Moment></td>
                        <td><Moment format="h:m:s:A DD/MM/YYYY">{user.updated_at}</Moment></td>
                        <td className="action"><a href="# " onClick={() => setAddEditFormToggle(user)}>Sửa</a> <a href="# " onClick={() => deleteUserModal(user)}>Xóa</a></td>
                    </tr>
                )) : <tr><td className="no-record" colSpan="11"><p>KHÔNG CÓ KẾT QUẢ NÀO</p></td></tr>}
            </tbody>
        </table>
    );
}

export default TableList;