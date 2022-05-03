import React from "react";
import "../style/Header.scss"
import {Link, NavLink} from "react-router-dom";


function Header (){

    return <header>
        <div className='navbar content-container'>
                <Link to='/' className='navbar-logo' href="#"><img src='images/Logo.svg' alt='logo'/></Link>
            <NavLink to='/profile'><img src='images/userico.svg' alt='user icon'/></NavLink>

        </div>
    </header>
};

export default Header;