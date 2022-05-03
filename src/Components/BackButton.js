import React from 'react';
import { useNavigate } from "react-router-dom";

const BackButton = () => {
   const navigate = useNavigate();
    return (
        <div>
            <img src='images/backButton.svg' alt='back'
            style={{position: "fixed",
                    right: "100px",
                    bottom: "100px",
                    zIndex: "10",
                    cursor: "pointer"}}
            onClick={()=>navigate(-1)}/>
        </div>
    );
};

export default BackButton;