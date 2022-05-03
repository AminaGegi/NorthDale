import React from "react";
import "../../style/authorization/Gender.scss"


export default function Gender () {
    return <>
        <div className='gender item'>
            <div>Пол</div>
            <div className='gender-switch'>
                <label>
                    <input type="radio" name="test" checked value="1" />
                    Мужской
                </label>
                <label>
                    <input type="radio" name="test" value="2" />
                    Женский
                </label>
            </div>
        </div>
    </>
}
