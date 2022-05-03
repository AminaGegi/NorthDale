import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CommunityItem from "./CommunityItem";

const All = () => {
    return (
        <div className='box'>
                    <Container>
                        <Row className='w-1/3 p-3 flex justify-center m-2 text-lg font-medium border-bottom'> Все </Row>
                        <Row>
                            <Col sm={8}>
                                <input type='text' placeholder='Поиск сообществ' className='prof__search'/>
                            </Col>
                        </Row>

                        <CommunityItem imgSrc='images/community/community.svg' />
                        <hr/>
                        <CommunityItem imgSrc='images/community/community2.svg' />
                        <hr/>
                        <CommunityItem imgSrc='images/community/community3.svg'  />
                        <hr/>
                        <CommunityItem imgSrc='images/community/community4.svg'  />
                        <hr/>
                        <CommunityItem imgSrc='images/community/community5.svg' />
                        <hr/>
                        <CommunityItem imgSrc='images/community/community6.svg' />
                        <hr/>
                    </Container>
        </div>
    );
};

export default All;