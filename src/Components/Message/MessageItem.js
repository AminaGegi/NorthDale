import React from "react";
import {Container} from "react-bootstrap";
import "../../style/message/MessageItem.scss"


export default function MessageItem (props){
    return (
        <>
            <Container className='message_item'>
                <div className='flex' onClick={props.click}>
                    <div className='partner-ico' className='pr-4 pt-2'>
                        <img alt='avatar' src={props.imgSrc} style={{width:'45px'}}/>
                    </div>
                    <div>
                        <div>
                            <div>
                                {props.name}
                            </div>
                            <div style={{color: "#a6a6a6"}}>
                                Образовательной платформе быть, товарищи!
                            </div>
                            <div style={{color: "#a6a6a6"}}>
                                26 янв 2022
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <hr className='ml-16 h-1'/>

            </Container>
            </>
    )
}