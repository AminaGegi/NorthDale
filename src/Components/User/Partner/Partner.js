import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Partners from "./Partners";
import Recommendations from "./Recommendations";
import "../../../style/user/Main/Box.scss"
import "../../../style/user/partner/list.scss"
import Footer from "../../Footer";

export default function Partner (){
    return (<>
            <Footer />
            <Container>
                    <Row><Col sm={8}><Partners /></Col>
                    <Col sm={4}>
                        <Row>
                            <Col className="partner-list">
                                <Row>Мои единомышленники</Row>
                                <Row>Заявки в единомышленники</Row>
                                <Row>Телефонная книга</Row>
                                <Row>Новые единомышленники</Row>
                                <Row>Поиск единомышленников</Row>
                                <Row>Список единомышленников</Row>
                            </Col>
                        </Row>
                        <Row><Recommendations /></Row>
                    </Col>
                    </Row>
            </Container>
        </>
    )
}