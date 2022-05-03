import React from "react";
import "../../../style/user/Main/Title.scss"

export default function Title (){
    return (<>
            <div className='title' >
                <div className=' flex justify-content-start'>
                    <div>
                        <div className='title-photo'>
                            <img src='images/user/mainphoto.svg' alt='main'/>
                        </div>
                    </div>
                    <div className="pl-5">
                        <div className='title-main'>
                            <div>
                                <div className='title-main-name'>
                                        <h2>Илон Маск</h2>
                                </div>
                            </div>
                            <div className='title-main-location py-3'>
                                <div className='flex flex-column'>
                                    <div>
                                        <span className='pr-2'>Город: </span>
                                        <span>Санкт-Петербург</span>
                                    </div>
                                    <div />
                                    <div className='py-2 pl-16'>Показать подробную информацию</div>
                                </div>
                            </div>
                        </div>
                    <hr />
                    <div className='user-notifications flex justify-content-around'>
                        <div className="user-notifications-item">
                            <div className='user-notifications-item-quantity'>
                                <b>43</b>
                            </div>
                            <div className="user-notifications-item-characteristic">
                                единомышленника
                            </div>
                        </div>
                        <div className="user-notifications-item">
                            <div className='user-notifications-item-quantity'>
                                <b>69</b>
                            </div>
                            <div className="user-notifications-item-characteristic">
                                подписчиков
                            </div>
                        </div>
                        <div className="user-notifications-item">
                            <div className='user-notifications-item-quantity'>
                                <b>3</b>
                            </div>
                            <div className="user-notifications-item-characteristic">
                                уровень
                            </div>
                        </div>
                        <div className="user-notifications-item">
                            <div className='user-notifications-item-quantity'>
                                <b>45</b>
                            </div>
                            <div className="user-notifications-item-characteristic">
                                чего то там
                            </div>
                        </div>
                    </div>
                </div>
                    <div />
                </div>

            </div>
        </>
    )
}