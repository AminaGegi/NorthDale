import React from "react";
import "../../../style/user/Main/Recommendations.scss"


export default function Recommendations (props){
    return (<div className='recommendations'>
            <div>
                <div className='flex justify-content-start py-2 px-5'>
                    <div className='pr-4'>
                        <img alt='user' className="rounded-lg" src={props.imgSrc}/>
                    </div>
                    <div>
                        <div>Единомышленник</div>
                        <div style={{color: "#a6a6a6"}}>16 общих единомышленников</div>
                        <div style={{cursor: "pointer"}}>Отписаться</div>
                    </div>
                </div>
            </div>
        </div>
    )
}