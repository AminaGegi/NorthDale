import React from "react";
import {Container, Col} from "react-bootstrap";
import Title from "./Title";
import Skills from "./Skills";
import Recommendations from "./Recommendations";

export default function Main (){
    return (<>
            <Container>
                <div>
                     <Title />
                </div>
                <div className='flex'>
                    <Col sm={8}><Skills /></Col>
                    <Col sm={4} style={{marginTop:"70px"}}>
                        <Recommendations imgSrc='images/user/edinfour.svg'/>
                        <Recommendations imgSrc='images/user/edinthree.svg'/>
                        <Recommendations imgSrc='images/user/edintwo.svg'/>
                        <Recommendations imgSrc='images/user/edinone.svg'/>
                    </Col>
                </div>
            </Container>
        </>
    )
}