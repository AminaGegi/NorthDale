import React, {useState} from "react";
import Footer from '../Footer'
import {Col, Container, Row} from "react-bootstrap";
import '../../style/user/partner/list.scss';
import MessageItem from "./MessageItem";
import "../../style/message/message.scss"
import Open from "./Open";
import {NavLink} from "react-router-dom";
import Header from "../Header";

export default function Message (){
    const [isActive, setActive] = useState(false);
    const handleClick = () =>{
        setActive(!isActive);
    }

    return (<>
            <div className='message'>
                <Header/>
                <Footer />
                <Container>
                    <div className='flex'>
                    <Col sm={8} className='message-main__box'>
                            <Row  className='message-main__box-search'>
                                <Col sm={6}>
                                    <input type='text' placeholder='Поиск друзей' className='prof__search'/>
                                </Col>
                                <Col sm={6} className='flex items-start justify-content-end'>
                                        <img alt='new chat' src='images/message/single.svg'/>
                                        <NavLink to='/group'><img alt='new group' src='images/message/group.svg' /></NavLink>
                                </Col>
                            </Row>
                        <div className='pl-4 pb-2.5' >
                        <div className='flex justify-content-start'>
                                <div className='p-2 text-center'>
                                    <div>
                                        <img alt='partner' src='images/message/partner_one.svg'/>
                                    </div>
                                    <div className='text-textGrey'>Имя</div>
                                </div>
                            <div className='p-2 text-center'>
                                    <div>
                                        <img alt='partner' src='images/message/partner_two.svg'/>
                                    </div>
                                    <div className='text-textGrey'>Имя</div>
                                </div>
                            <div className='p-2 text-center'>
                                <div>
                                    <img alt='partner' src='images/message/partner_three.svg'/>
                                </div>
                                    <div className='text-textGrey'>Имя</div>
                            </div>
                            <div className='p-2 text-center'>
                                <div>
                                    <img alt='partner' src='images/message/partner_four.svg'/>
                                </div>
                                    <div className='text-textGrey'>Имя</div>
                            </div>
                            <div className='p-2 text-center'>
                                <div>
                                    <img alt='partner' src='images/message/partner_five.svg'/>
                                </div>
                                    <div className='text-textGrey'>Имя</div>
                            </div>
                            <div className='p-2 text-center'>
                                <div>
                                    <img alt='partner' src='images/message/partner_six.svg' />
                                </div>
                                    <div className='text-textGrey'>Имя</div>
                            </div>
                            </div>
                        </div>
                        <div style={{ display: `${isActive? "none" : "block"}`}}>
                            <MessageItem imgSrc='images/message/partner_two.svg' name='Единомышленница'/>
                            <MessageItem imgSrc='images/message/partner_three.svg' name='Единомышленница'/>
                            <MessageItem imgSrc='images/message/partner_one.svg' name='Единомышленник' />
                            <MessageItem imgSrc='images/message/partner_four.svg' name='Единомышленница' click={handleClick}/>
                            <MessageItem imgSrc='images/message/partner_five.svg' name='Единомышленница'/>
                            <MessageItem imgSrc='images/message/partner_six.svg' name='Единомышленник'/>
                        </div>
                        <Row style={{ display: `${isActive? "block" : "none"}`}}>
                            <Open click={handleClick}/>
                        </Row>
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