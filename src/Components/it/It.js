import React from 'react';
import {Link} from "react-router-dom";
import Footer from "../Footer";
import {Container} from "react-bootstrap";
import ItRightMenu from './ItRightMenu';
import '../../style/talent_tree/talent_tree.scss'
import Header from "../Header";
import BackButton from "../BackButton";


function ItItem (props){
    return(
        <div
            className='shadow-2xl m-4 rounded-lg text-white bg-treeCard h-36 w-5/6 flex justify-content-center items-center'
            style={props.style} >
            <Link to={props.link}>{props.name}</Link>
        </div>
    )
}


const It = () => {
    return (<>
        <div className='talent__tree-background' style={{backgroundImage: `url("images/talent_tree/talent_tree_bg.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
        }}>
            <Header/>
            <Footer />
            <div className='talent__tree-main__box overflow-y-scroll'>

            <Container>
                <div className='text-[62px] text-talentTree p-4 py-0 m-0'>Информационные технологии</div>
                <div className='mx-auto grid lg:grid-cols-2 grid-cols-1 gap-2'>
                    <ItItem name={"Системный администратор"} link={''} />
                    <ItItem name={"Front-end разработчик"} link={''} />
                    <ItItem name={"Back-end разработчик"} link={''} />
                    <ItItem name={"Тестировщик"} link={''} />
                    <ItItem name={"Информационная безопасность"} link={''} />
                    <ItItem name={"Системный аналитик"} link={''} />
                    <ItItem name={"Веб-дизайнер"} link={''} />
                    <ItItem name={"UX/UI дизайнер"} link={''} />
                    <ItItem name={"QA-инженер"} link={''}  style={{
                        WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))"
                    }}/>
                    <ItItem name={"Full-stack разработчик"} link={'/fullstack'}  style={{
                        WebkitBoxReflect: "below 0px -webkit-gradient(linear,left bottom, left top,  from(rgba(0,0,0,0.4)), to(rgba(0,0,0,0)))"
                    }}/>

                </div>
            </Container>
            </div>
            <ItRightMenu />
            <BackButton />
        </div>
        </>
    );
};

export default It;