import Axios from 'axios';
import React, { useRef, useState } from 'react';
import GuideAndIntroduction from './GuideAndIntroduction';
import RegisterForm from './RegisterForm';

function Register(props) {
    const {closeRegister} = props;
    const [isFinish,setIsFinish] = useState(false);
    const formRef = useRef();
    const handleRegisterFormStatus = async () => {
        setIsFinish(!isFinish);
    }

    const handleRegisterOnSubmit = async (payload,{resetForm}) => {
        const {
            firstname,
            lastname,
            username,
            password,
            email,
        } = payload;
        Axios.post('/public/api/auth/register',{
            firstname:  firstname,
            lastname:   lastname,
            username:   username,
            password:   password,
            email:      email
        }).then(response => {
            const {data:{message,register_status}} = response;
            alert(message);
            if (register_status == 1) {
                resetForm({});
            }
        }).catch(error => {
            if (error) {
                alert('Không đủ điều kiện đăng ký');

                // Error log
                // console.log(error);
                console.log(error.response);
            }
        })
    }

    return (
        <div className="register">
            <div className="guide-and-introduction">
                <h1>CHỈ VÀI BƯỚC THÔI!</h1>
                <div className="mb2">
                    <ul className="guide">
                    <li>Hoàn thành mẫu đăng ký.</li>
                    <li>Đọc <b>Điều Khoản và Điều Kiện</b> của chúng tôi.</li> 
                    <li>Xác nhận đã đọc <b>Điều Khoản và Điều Kiện</b> sau đó hoàn thành đăng ký.</li>
                    </ul>
                </div>

                <GuideAndIntroduction/>
                <div className="finish-checkbox mt2" onClick={handleRegisterFormStatus}>
                        <div className="checkbox">
                            <div className="checkbox-tick" style={{
                                visibility: isFinish ? 'visible' : 'hidden',
                            }}>
                            </div>
                        </div>
                        Tôi đã đọc và chấp nhận
                        <b> Điều Khoản và Điều Kiện</b>
                </div>
            </div>

            <div className="form">
                <h1>ĐĂNG KÝ</h1>
                <div className="register-close close" onClick={closeRegister}>Đóng</div>
                <RegisterForm isFinish={isFinish} handleRegisterOnSubmit={handleRegisterOnSubmit} formRef={formRef}/>
            </div>
        </div>
    );
}

export default Register;