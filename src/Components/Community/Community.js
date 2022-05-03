import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import All from "./All";
import CommunityRecommendations from "./CommunityRecommendations";
import Footer from "../Footer";
import Header from "../Header";

const Community = () => {
    const [showRecommend,setShowRecommend] = useState(true);
    function handleClick (){
        setShowRecommend(!showRecommend);
    }
    return (
        <div>
            <Header/>
            <Footer />
            <Container>
                <Row><Col sm={8}><All /></Col>
                    <Col sm={4}>
                        <Row>
                            <Col className="partner-list">
                                <Row>Мои единомышленники</Row>
                                <Row>Поиск сообществ</Row>
                                <div style={{ display: `${showRecommend? "none" : "block"}`}}>
                                    <Row>Сообщества единомышленников</Row>
                                    <Row>По интересам</Row>
                                    <Row>По навыкам</Row>
                                </div>
                                <Row onClick={handleClick}>Рекомендации</Row>
                            </Col>
                        </Row>
                        <Row><CommunityRecommendations /></Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Community;