import React from "react";
import "../style/StartPage.scss"
import {Link} from "react-router-dom";
import "../style/normalaize.scss";
import StartHeader from "./StartHeader";



function StartPage (){
    return <>
        <StartHeader />
        <main>
        <div className='start__page' style={{
            backgroundImage: `url("images/startScreen.jpg")`
        }}>
            <div className='start__page-text__box'>
                <div className='start__page-text__box-text__one'>
                    НАЙДИТЕ С НАМИ
                    <br/><b>ПРИЗВАНИЕ</b> СВОЕЙ МЕЧТЫ
                </div>
                <div className='start__page-text__box-text__two'>
                    Прямо сегодня освой новые навыки и найди единомышленников
                </div>
                <button className='start__page-btn'>
                    <Link to="/Authorization">Давай начнем</Link>
                </button>
            </div>

        </div>
    </main>
        </>
}

export default StartPage;