import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import LoginStyle from '../css/login.module.css';
import LoginImg from '../image/login.jpg';


const Login = () => {
    const navigate = useNavigate()

    const onLogin= () => navigate('/main')

    return (
        <div className={LoginStyle.container}>
            <header className={LoginStyle.header}>
                <span className={LoginStyle.title}>냥가왈부</span>
                <div className={LoginStyle.icons}>
                    <button className={LoginStyle.iconButton}>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faHouse}/>
                        </Link>
                    </button>
                </div>
            </header>

            <body className={LoginStyle.boyd}>
                <div className={LoginStyle.imageContainer}>
                    <img src={LoginImg} alt="Login" className={LoginStyle.image} />
                </div>

                <div className={LoginStyle.body}>
                    <form className={LoginStyle.form}>
                        <div className={LoginStyle.formGroup}>
                            <label htmlFor="email" className={LoginStyle.label}>이메일</label>
                            <input type="email" id="email" className={LoginStyle.input} placeholder="이메일 입력" required />
                        </div>
                        <div className={LoginStyle.formGroup}>
                            <label htmlFor="password" className={LoginStyle.label}>비밀번호</label>
                            <input type="password" id="password" className={LoginStyle.input} placeholder="비밀번호 입력" required />
                        </div>
                        <button className={LoginStyle.submitButton} onClick={onLogin}>로그인</button>
                    </form>
                    <div className={LoginStyle.links}>
                        <Link to="/forgot-password" className={LoginStyle.link}>비밀번호를 잊으셨나요?</Link>
                        <Link to="/user/join" className={LoginStyle.link}>회원가입</Link>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default Login;