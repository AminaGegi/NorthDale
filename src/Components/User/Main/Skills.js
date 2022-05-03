import React from "react";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import Profession from "./Profession";
import "../../../style/user/Main/Box.scss"
import Mentor from "./Mentor";

export default function User (){
    return (<>
            <div className='box'>
                <Tabs defaultActiveKey="profession" className="mb-3 box">
                    <Tab eventKey="profession" title="Профессия" className='box'>
                        <Container>
                            <Row>
                                <Col sm={8}>
                                    <input type='text' placeholder='Поиск профессий' className='prof__search'/>
                                </Col>
                            </Row>

                                    <Profession alt='prof avatar' img={<img alt='prof avatar' src='images/user/proffive.svg'/> }  profession='Back-end разработчик'/>
                                    <hr/>
                                    <Profession alt='prof avatar' img={<img alt='prof avatar' src='images/user/proffour.svg'/>} profession='Тестировщик' />
                                    <hr/>
                                    <Profession alt='prof avatar' img={<img alt='prof avatar' src='images/user/profthree.svg'/>} profession='Сисадмин' />
                                     <hr/>
                                    <Profession alt='prof avatar' img={<img alt='prof avatar' src='images/user/proftwo.svg'/>} profession='Front-end разработчик' />
                                    <hr/>
                        </Container>
                    </Tab>
                    <Tab eventKey="habit" title="Хобби">
                        <Container>
                            <img src='images/user/tree_branch.jpg' alt="tree_branch"/>
                        </Container>
                    </Tab>
                    <Tab eventKey="mentor" title="Ментор" className='box'>
                        <Container>
                            <Mentor name='Ментор' skill='Опытный преопытный' imgSrc='images/user/mentor.svg'/>
                            <Mentor name='Ментор' skill='Опытный преопытный' imgSrc='images/user/mentor.svg'/>
                            <Mentor name='Ментор' skill='Опытный преопытный' imgSrc='images/user/mentor.svg'/>
                            <Mentor name='Ментор' skill='Опытный преопытный' imgSrc='images/user/mentor.svg'/>
                        </Container>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}