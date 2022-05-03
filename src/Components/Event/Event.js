import React from 'react';
import Footer from "../Footer";
import {Col, Container, Row} from "react-bootstrap";
import StoriesItem from "./StoriesItem";
import Header from "../Header";

const Event = () => {
    return (
        <div>
            <Header/>
            <Footer />
            <Container>
                <Row>
                    <Col sm={8}>
                    {/*    stories*/}
                        <div className='rounded-lg bg-white mt-4 flex justify-content-around p-5 w-100'>
                            <StoriesItem imgSrc='images/events/stories1.svg' />
                            <StoriesItem imgSrc='images/events/stories2.svg' />
                            <StoriesItem imgSrc='images/events/stories3.svg' />
                            <StoriesItem imgSrc='images/events/stories4.svg' />
                            <StoriesItem imgSrc='images/events/stories5.svg' />
                            <StoriesItem imgSrc='images/events/stories6.svg' />
                        </div>
                        <Row className='rounded-lg bg-white w-100 px-3 mt-4' >
                            <div className='flex justify-content-start pt-3 pl-4'>
                                <div  className='profession-ico'>
                                    <img src='images/events/avatarNews.svg' style={{width: "100%"}} alt='avatar'/>
                                </div>
                                <div className=' px-3'>
                                    <p className='m-0'>Единомышленница</p>
                                    <p className='m-0 text-textGrey'>28 янв 2022</p>
                                </div>
                            </div>
                            <div className='pt-5 pb-20 w-full'>
                                <img alt='news' src='images/events/newsPhoto.svg'/>
                            </div>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Row>
                            <Col className="partner-list">
                                <Row>Мои единомышленники</Row>
                                <Row>Новые события</Row>
                                <Row>Фотографии</Row>
                                <Row>Видео</Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Event;