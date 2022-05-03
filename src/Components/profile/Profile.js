import React from 'react';
import Footer from "../Footer";
import {Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Header from "../Header";

const Profile = () => {
    return (
        <>
            <Header/>
          <Footer />
          <div style={{ backgroundImage: `url("images/profile/profileBG.jpg")`,
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat'}}
               className='h-screen ml-[80px]'>
              <div className='bg-whiteBG flex justify-content-between ml-auto w-48 p-2 rounded-lg position-relative top-5 right-5'>
                      Edit wallpaper
                      <img src='images/profile/edit_wallpaper.svg' alt='edit_wallpaper'/>
              </div>
              <Container>
                  <div className='mt-10'><img src='images/user/mainphoto.svg' alt="mainphoto"/></div>
                  <div className='flex justify-content-between'>
                      <div className='grid gap-4'>
                          <div className='grid gap-2'>
                              <h1>Имя Фамилия</h1>
                              <h2>Junior UX/UI designer</h2>
                          </div>
                          <div className='grid gap-2'>
                             <div>
                                 <img className='d-inline p-2' src='images/profile/location.svg' alt='location'/><span>Россия, Санкт-Петербург</span>
                             </div>
                              <div>
                                  <img className='d-inline p-2' src='images/profile/gender.svg' alt='gender'/><span>Мужской</span>
                              </div>
                              <div>
                                  <img className='d-inline p-2' src='images/profile/cupcake.svg' alt='cupcake'/><span>04-05-2000</span>
                              </div>
                              <div>
                                  <img className='d-inline p-2' src='images/profile/calendar.svg' alt='calendar'/><span>15-02-2022</span>
                              </div>
                          </div>
                          <div>
                              <div className='flex'>
                                  <div className='w-10 h-10 bg-black m-2'/>
                                  <div className='w-10 h-10 bg-black m-2'/>
                                  <div className='w-10 h-10 bg-black m-2'/>
                                  <div className='w-10 h-10 bg-black m-2'/>
                                  <div className='w-10 h-10 bg-black m-2'/>
                              </div>
                              <div className='pt-2'>
                                  <img src='images/profile/edit.svg' alt='edit'/>
                              </div>
                          </div>
                      </div>
                      <div className='w-1/2'>
                          <div className='rounded-lg bg-white p-4'>
                              <h2>Безопасность</h2>
                          <hr className='p-2 mt-3 bg-BGGrey' />
                          <div className='flex justify-content-between'>
                              <div><img className='d-inline p-2'  src='images/profile/phone.svg' alt='phone'/> Телефон</div>
                              <div>+7 *** *** ** 46</div>
                          </div>
                              <div className='flex justify-content-between'>
                                  <div><img className='d-inline p-2'  src='images/profile/email.svg' alt='email'/> E-mail</div>
                                  <div>an***@incloud.com</div>
                              </div>
                              <div className='flex justify-content-between'>
                                  <div><img className='d-inline p-2'  src='images/profile/lock.svg' alt='lock'/> Пароль</div>
                                  <div>Обновлен вчера</div>
                              </div>

                          </div>
                          <div className='rounded-lg bg-white my-4 p-4'>
                              <h2 className='mb-3'>Действия</h2>
                              <div className='flex align-items-start'><img className='d-inline pr-2' src='images/profile/trash.svg' alt='trash'/>
                              <span>
                                  Удалить аккаунт
                                  <p className='text-textGrey my-2'>Вы можете полностью  удалить акккаунт, данные в нем и информацию о подключенных сервисах</p>
                              </span>
                              </div>

                          </div>
                          <NavLink to="/user" className='p-2 border-2 rounded-lg w-72 justify-content-center flex ml-auto my-4'><b><h3>Вернуться</h3></b></NavLink>
                      </div>
                  </div>
              </Container>
          </div>
        </>
    );
};

export default Profile;