import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import "../../style/user/User.scss"
import Main from "./Main/Main";
import '../../style/Header.scss';
import Footer from "../Footer";
import '../../style/user/Talent_alert.scss'
import {Link} from "react-router-dom";
import Header from "../Header";

export default function User (){
    const [isActive,setActive] = useState(true);
    const activeHandleClick = () => {
        setActive(!isActive);
    }
    return (<>
            <Header />
            <div className={`modal-wrapper ${isActive ? "active" : ""}`}>
                <Modal.Dialog className='talent_alert'>
                    <Modal.Header style={{border: "none"}}>
                        <Modal.Title>Давай начинать!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Заполни ветку талантов, узнаешь свой уровень.</p>
                    </Modal.Body>

                    <Modal.Footer  style={{border: "none"}}>
                        <Button variant="outline-dark" onClick={activeHandleClick}>Не сейчас</Button>
                        <Button variant="primary" className='bg-[#0D9CED]'><Link to='/talent_tree' className='text-white'>Заполнить</Link></Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>

            <div className='user'>
                <Main />
                <Footer />
            </div>
        </>
    )
}