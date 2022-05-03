import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import '../../../style/user/Main/Mentor.scss'


export default function Mentor (props){
    return (<>
            <Container className='mentor'>
                <div className='flex justify-content-start px-0'>
                    <div className='mentor-ico' sm={2}>
                        <img alt='partner avatar' src={props.imgSrc} className='pr-4'/>
                    </div>
                    <div>
                        <div>
                            {props.name}
                        </div>
                        <div>
                            {props.skill}
                        </div>
                        <Row className='pl-2'>
                            <Col className='mentor-buttons' sm={4}><button className='text-textGrey bg-transparent px-3 py-0'>Стена</button></Col>
                            <Col className='mentor-buttons' sm={4}><button  className='text-textGrey bg-transparent px-3 py-0'>Группа</button></Col>
                        </Row>
                        <Row className='pl-2'>
                            <Col className='mentor-buttons' sm={8}>Написать сообщение</Col>
                            <Col className='mentor-buttons' sm={2}>Позвонить</Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <hr/>
        </>
    )
}