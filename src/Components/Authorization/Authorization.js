import React from "react";
import Age from "./Age";
import "../../style/authorization/Authorization.scss"
import Gender from "./Gender";
import {Link} from "react-router-dom";
import StartHeader from "../StartHeader";


function Authorization (){
    return <main>
        <StartHeader/>
        <div className='authorization' style={{
            backgroundImage: `url("images/Start_Page__neutral.svg")`
        }}>
            <div className='authorization-content'>
                <div className='authorization-text__box'>
                    Представься, пожалуйста,
                    <br/>чтобы тебе было удобнее
                    <br/>знакомиться с твоими
                    <br/>единомышленниками
                </div>
                <div className='login__form'>
                    <div className='login__form-name item'>
                        <div>Имя ⃰</div>
                        <input type='text' placeholder=''/>
                    </div>
                    <div className='login__form-surname item'>
                        <div>Фамилия ⃰</div>
                        <input type='text' placeholder=''/>
                    </div>
                    <Gender />
                   <Age />
                    <button className='login__form-btn'><Link to='../User'>Продолжить</Link></button>
                </div>
            </div>

        </div>
    </main>
}

export default Authorization;