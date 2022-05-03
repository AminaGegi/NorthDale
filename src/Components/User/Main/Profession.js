import React from "react";
import {Row} from "react-bootstrap";
import "../../../style/user/Main/Profession.scss"


export default function Profession (props){


    return (<>
            <div className='profession'>
                <div>
                    <div>
                        <div className='flex justify-content-start'>
                            <div className='profession-ico pr-4' >
                                {props.img}
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>{props.profession}</div>
                                    </div>
                                </div>
                                <Row>
                                     <div className='profession-subscribers__number'>
                                        2 678 студентов
                                    </div>
                                </Row>
                                <Row>
                                    <div style={{cursor: "pointer"}}>
                                        Хочу учиться
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}