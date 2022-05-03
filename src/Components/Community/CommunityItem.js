import React from "react";
import {Col, Container} from "react-bootstrap";
import "../../style/user/Main/Profession.scss"


export default function CommunityItem (props){


    return (<>
            <div className='profession'>
                <div>
                    <Container>
                        <div className='flex justify-content-start'>
                            <div className='profession-ico' sm={2}>
                                <img alt='user' className='pr-4' src={props.imgSrc} />
                            </div>
                            <div sm={6}>
                                <div>
                                    <Col>
                                        <div>CONTENDED-онлайн школа дизайна</div>
                                    </Col>
                                </div>
                                <div>
                                    <Col className='profession-subscribers__number'>
                                        открытая группа
                                    </Col>
                                </div>
                                <div>
                                    <Col>
                                        2 678 участников
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}