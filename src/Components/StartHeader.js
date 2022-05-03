import React, {useState} from "react";
import "../style/Header.scss"
import {Link} from "react-router-dom";


function StartHeader (){
    const [isActive,setActive] = useState(false);
    const handleClick = () => {
        setActive(!isActive);
    }


    return <header>
        <div className={`modal-wrapper ${isActive ? "active" : ""}`}>
            <div className='login__frame'>
                <div className='login__frame-container'>
                    <div className='login__frame-tools'>
                        <div className='login__frame-tools-language'>
                            Русский (RU) <img src='images/languageico.svg' className='inline' alt=''/>
                        </div>
                        <div className='login__frame-tools-close  cursor-pointer' onClick={handleClick}>
                            <img src='images/close.svg' className='inline' alt=''/>
                        </div>
                    </div>
                    <div className="login__frame-input__block">
                        <div className='login__frame-enter'>
                            <h1><b>Вход</b></h1>
                        </div>
                        <div className='login__frame-login'>
                            <div className='login__frame-login-text'>
                                <div className='login__frame-login-label'>
                                    Логин
                                </div>
                                <div className='login__frame-login-authorization'>
                                    <span>Еще не зарегистрирован?          </span>
                                    <span className='login__frame-login-authorization-link' onClick={handleClick}><Link to='/Authorization'>  Регистрация</Link></span>
                                </div>
                            </div>
                            <input className='login__frame-login-input' type='text'/>
                        </div>
                        <div className='login__frame-password'>
                            <div className="login__frame-password-text">
                                <div className='login__frame-password-label'>
                                    Пароль
                                </div>
                                <div className='login__frame-password-forgot'>
                                    Забыли пароль
                                </div>
                            </div>
                            <div className='login__frame-password-input__block'>
                                <input className='login__frame-password-input__block-input' type='text'/>
                                <img src='images/Password_icon.svg' alt='show password' className='login__frame-password-input__block-icon'/>
                            </div>
                        </div>
                        <div className='login__frame-btn'>
                            <Link to='/User' onClick={handleClick}>
                                Далее
                            </Link>
                        </div>
                    </div>
                    <hr />
                    <div className='login__frame-fast_authorization'>
                        <Link to="/User" className='login__frame-fast_authorization-facebook' onClick={handleClick}>
                            <img src="images/facebook.svg" alt="Logo from facebook"/>
                        </Link>
                        <Link to="/User" className='login__frame-fast_authorization-linkedin' onClick={handleClick}>
                            <img src="images/linkedin.svg" alt="Logo from linkedin"/>
                        </Link>
                        <Link to="/User" className='login__frame-fast_authorization-google' onClick={handleClick}>
                            <img src="images/google.svg" alt="Logo from google" />
                        </Link>
                        <Link to="/User" className='login__frame-fast_authorization-git' onClick={handleClick}>
                            <img src="images/git.svg" alt="Logo from git"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='navbar content-container'>
                <Link to='/' className='navbar-logo' href="#"><img src='images/Logo.svg' alt='logo'/></Link>
            <div className='navbar-login' onClick={handleClick}>Авторизация</div>
        </div>
    </header>
};

export default StartHeader;