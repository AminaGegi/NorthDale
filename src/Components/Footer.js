import React from "react";
import "../style/Footer.scss"
import "../style/menu-icons.css"
import {NavLink} from "react-router-dom";

export default function Footer (){
    return (<>
    <div className='flex flex-column footer'>
        <div>
            <img src='images/footer/Action_close.svg' alt="close_icon" className='footer-close'/>
            <img src='images/footer/Action_open.svg' alt="open_icon" className='footer-open'/>
        </div>
        <div className='footer-menu'>
        <NavLink to="/user" className='icon-userico' >
            <span>Моя страница</span>
        </NavLink>
        <NavLink to='/talent_tree' className='icon-leafico'>
            <span>Ветка талантов</span>
        </NavLink>
        <NavLink to="/partner"  className='icon-usersico'>
            <span>Единомышленники</span>
        </NavLink>
        <NavLink to='/message' className='icon-envelopeico'>
            <span>Сообщения</span>
        </NavLink>
        <NavLink to='/community' className='icon-licenseico'>
            <span>Сообщества</span>
        </NavLink>
            <NavLink to='/events' className='icon-calendarico'>
                <span>События</span>
            </NavLink>
        </div>
    </div>
</>
)
    }