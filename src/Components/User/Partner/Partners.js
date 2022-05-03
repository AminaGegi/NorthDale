import React from "react";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import "../../../style/user/Main/Box.scss"
import Mentor from "../Main/Mentor";

export default function Partners (){
    return (<>
            <div className='box'>
                <Tabs defaultActiveKey="profession" className="mb-3 box">
                    <Tab eventKey="profession" title="Все" className='box'>
                        <Container>
                            <Row>
                                <Col sm={8}>
                                    <input type='text' placeholder='Поиск друзей' className='prof__search'/>
                                </Col>
                            </Row>
                            <Mentor name='Единомышленник' skill='Институт тестировочного дизайна и кодинга ' imgSrc='images/user/partner.svg'/>
                            <Mentor name='Единомышленник' skill='Институт тестировочного дизайна и кодинга ' imgSrc='images/user/partner.svg'/>
                            <Mentor name='Единомышленник' skill='Институт тестировочного дизайна и кодинга ' imgSrc='images/user/partner.svg'/>
                            <Mentor name='Единомышленник' skill='Институт тестировочного дизайна и кодинга ' imgSrc='images/user/partner.svg'/>
                            <Mentor name='Единомышленник' skill='Институт тестировочного дизайна и кодинга ' imgSrc='images/user/partner.svg'/>
                            <Mentor name='Единомышленник' skill='Институт тестировочного дизайна и кодинга ' imgSrc='images/user/partner.svg'/>
                        </Container>
                    </Tab>
                    <Tab eventKey="habit" title="Онлайн" className='box'>
                        <Container>
                            <Mentor name='Единомышленник' skill='Институт тестировочного дизайна и кодинга ' imgSrc='images/user/partner.svg'/>
                            <Mentor name='Единомышленник' skill='Институт тестировочного дизайна и кодинга ' imgSrc='images/user/partner.svg'/>
                            <Mentor name='Единомышленник' skill='Институт тестировочного дизайна и кодинга ' imgSrc='images/user/partner.svg'/>
                            <Mentor name='Единомышленник' skill='Институт тестировочного дизайна и кодинга ' imgSrc='images/user/partner.svg'/>
                        </Container>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}