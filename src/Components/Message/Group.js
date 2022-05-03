import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import InputRadio from "../UI/InputRadio";
import Footer from "../Footer";
import {NavLink} from "react-router-dom";
import Header from "../Header";

function PartnerItem (props){
    return (
        <>
            <Container className='message_item'>
                <div className='flex align-items-center' onClick={props.click}>
                    <div className='partner-ico pr-4 pt-2'>
                        <img alt='avatar' src={props.imgSrc} style={{width:'45px'}}/>
                    </div>
                    <div className='flex justify-between w-100'>
                        <div>
                            {props.name}
                        </div>
                        <InputRadio id={props.id} />
                    </div>
                </div>
                <hr className='ml-16 h-1'/>
            </Container>
        </>
    )
}

export default function Group (){

    return (<>
            <div className='message'>
                <Header/>
                <Footer />
                <Container>
                    <div className='flex'>
                        <Col sm={8} className='message-main__box'>
                            <Row>
                                <Col>
                                    <input type='text' placeholder='Введите имя или фамилию' className='prof__search w-75'/>
                                </Col>
                            </Row>
                            <div>
                                <PartnerItem imgSrc='images/message/partner_two.svg' name='Лагерта' id={'r1'}/>
                                <PartnerItem imgSrc='images/message/partner_three.svg' name='Джудит' id={'r2'}/>
                                <PartnerItem imgSrc='images/message/partner_one.svg' name='Торви' id={'r3'} />
                                <PartnerItem imgSrc='images/message/partner_four.svg' name='Ивар' id={'r4'}/>
                                <PartnerItem imgSrc='images/message/partner_five.svg' name='Сигги' id={'r5'}/>
                                <PartnerItem imgSrc='images/message/partner_six.svg' name='Бьёрн' id={'r6'}/>
                            </div>
                        </Col>
                        <Col sm={3} className='partner-list h-fit' >
                            <Row><NavLink to='/partner'>Мои единомышленники</NavLink></Row>
                            <Row><NavLink to=''>Непрочитанные</NavLink></Row>
                        </Col>
                    </div>
                </Container>
            </div>
        </>
    )
}

