import React from 'react';
import "./InputRadio.css"

const InputRadio = (props) => {
    return (
        <>
            <input type="checkbox" id={props.id} name="r1" />
            <label htmlFor={props.id}><span></span></label>
            </>
    );
};

export default InputRadio;