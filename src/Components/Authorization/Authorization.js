import React from "react";
import "../../style/authorization/Authorization.scss"
import StartHeader from "../StartHeader";
import {useForm} from "react-hook-form";
import axios from "axios";




function Authorization (){
    const URL_API = url-api;

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm({mode:"onChange"})
    const login = watch('login');
    const email = watch('email');
    const password = watch('password');
    const cpassword = watch('cpassword');


    const onSubmit = data => axios(
        axios.post(URL_API, data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    )
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='login__form'>
                        <div className='login__form-name item'>
                            <div>Логин ⃰</div>
                            <input type='text' placeholder=''
                                {...register('login',{required: true, maxLength: 15})}/>
                            {errors.login && <i>Обязательное поле, не более 15 символов</i>}
                        </div>
                        <div className='login__form-name item'>
                            <div>E-mail ⃰</div>
                            <input type='email' placeholder=''
                                   {...register('email',{required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"})}/>
                            {errors.email && <i>Обязательное поле, не более 15 символов</i>}
                        </div>
                        <div className='login__form-name item'>
                            <div>Пароль ⃰</div>
                            <input type='password' placeholder=''
                                   {...register('password',{required: true, maxLength: 15})}/>
                            {errors.password && <i>Обязательное поле, не более 15 символов</i>}
                        </div>
                        <div className='login__form-name item'>
                            <div>Повторите пароль ⃰</div>
                            <input type='password' placeholder=''
                                   {...register('cpassword',{required: true, validate: value => value === password})}/>
                            {errors.cpassword && <i>Обязательное поле, пароли должны совпадать</i>}
                        </div>

                        <input type='submit' value='Зарегестрироваться' className='login__form-btn'/>
                    </div>
                </form>
            </div>

        </div>
    </main>
}

export default Authorization;