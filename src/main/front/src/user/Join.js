import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faIdBadge, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import JoinStyle from '../css/join.module.css'
import WelcomeImg from '../image/welcome.jpg'

const Join = () => {
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
        alert('회원가입 완료!');
        navigate('/');
    };
    return (
        <div className={JoinStyle.container}>
            <header className={JoinStyle.header}>
                <span className={JoinStyle.title}>냥가왈부</span>
                <div className={JoinStyle.icons}>
                    <button className={JoinStyle.iconButton}>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faHouse}/>
                        </Link>
                    </button>
                </div>
            </header>

            <body>
                <div className={JoinStyle.imageContainer}>
                    <img src={WelcomeImg} alt="Login" className={JoinStyle.image} />
                </div>

                <div className={JoinStyle.header}>
                    <span className={JoinStyle.title}>회원가입</span>
                </div>

                <div className={JoinStyle.body}>
                    <form className={JoinStyle.form} onSubmit={handleSignUp}>
                        <div className={JoinStyle.formGroup}>
                            <FontAwesomeIcon icon={faUser} className={JoinStyle.icon} />
                            <input
                                type="text"
                                placeholder="사용자 이름"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={JoinStyle.input}
                                required
                            />
                        </div>

                        <div className={JoinStyle.formGroup}>
                            <FontAwesomeIcon icon={faIdBadge} className={JoinStyle.icon} />
                            <input
                                type="text"
                                placeholder="닉네임"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                className={JoinStyle.input}
                                required
                            />
                        </div>

                        <div className={JoinStyle.formGroup}>
                            <FontAwesomeIcon icon={faEnvelope} className={JoinStyle.icon} />
                            <input
                                type="email"
                                placeholder="이메일"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={JoinStyle.input}
                                required
                            />
                        </div>

                        <div className={JoinStyle.formGroup}>
                            <FontAwesomeIcon icon={faLock} className={JoinStyle.icon} />
                            <input
                                type="password"
                                placeholder="비밀번호"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={JoinStyle.input}
                                required
                            />
                        </div>

                        <button type="submit" className={JoinStyle.button}>회원가입</button>
                    </form>
                </div>
            </body>
        </div>
    );
};

export default Join;