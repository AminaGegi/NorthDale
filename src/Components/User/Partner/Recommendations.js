import React from "react";
import {Container} from "react-bootstrap";
import "../../../style/user/Main/Recommendations.scss"


export default function Recommendations (){
    return (<div className='recommendations'>
            <Container>
                <div className='flex justify-content-start py-2'>
                    <div>
                        <img  alt='partner avatar' src='images/user/edinfour.svg' className='pr-4'/>
                    </div>
                    <div>
                        <div>Единомышленник</div>
                        <div className='text-textGrey'>16 общих единомышленников</div>
                        <div style={{cursor: "pointer"}}>Подписаться</div>
                    </div>
                </div>
                <div className='flex justify-content-start py-2'>
                    <div>
                        <img alt='partner avatar' src='images/user/edinthree.svg' className='pr-4'/>
                    </div>
                    <div>
                        <div>Единомышленник</div>
                        <div className='text-textGrey'>16 общих единомышленников</div>
                        <div style={{cursor: "pointer"}}>Подписаться</div>
                    </div>
                </div>
                <div className='flex justify-content-start py-2'>
                    <div>
                        <img alt='partner avatar' src='images/user/edintwo.svg' className='pr-4'/>
                    </div>
                    <div>
                        <div>Единомышленник</div>
                        <div className='text-textGrey'>16 общих единомышленников</div>
                        <div style={{cursor: "pointer"}}>Подписаться</div>
                    </div>
                </div>
                <div className='flex justify-content-start py-2'>
                    <div>
                        <img alt='partner avatar' src='images/user/edinone.svg' className='pr-4'/>
                    </div>
                    <div>
                        <div>Единомышленник</div>
                        <div className='text-textGrey'>16 общих единомышленников</div>
                        <div style={{cursor: "pointer"}}>Подписаться</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}