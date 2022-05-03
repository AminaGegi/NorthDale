import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Footer from "../Footer";
import {Container} from "react-bootstrap";
import TechnoRightMenu from './TechnoRightMenu';
import '../../style/talent_tree/talent_tree.scss'
import Header from "../Header";
import BackButton from "../BackButton";

function TechnoItem (props){
    return(
        <div
            className='shadow-2xl m-4 rounded-lg text-white bg-treeCard  h-36 w-5/6 flex justify-content-center items-center'
            style={props.style} >
            <NavLink to={props.link}>{props.name}</NavLink>
        </div>
    )
}


const Techno = () => {
    return (
        <>
            <div className='talent__tree-background' style={{backgroundImage: `url("images/talent_tree/talent_tree_bg.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "contain"
        }}>
                <Header />
                <Footer />
            <div className='talent__tree-main__box overflow-y-scroll'>
            <Container>
                    <div className='text-[62px] text-talentTree p-4 py-0 m-0'>Технознание</div>
                    <div className='mx-auto grid lg:grid-cols-2 grid-cols-1 gap-2'>
                        <TechnoItem name={"Архитектура"} link={''} />
                        <TechnoItem name={"Биотехнология"} link={''} />
                        <TechnoItem name={"Информационные технологие"} link={'/it'} />
                        <TechnoItem name={"Кораблестроение"} link={''} />
                        <TechnoItem name={"Космонавтика"} link={''} />
                        <TechnoItem name={"Криптография"} link={''} />
                        <TechnoItem name={"Машиностроение"} link={''} />
                        <TechnoItem name={"Электроника"} link={''} />
                        <TechnoItem name={"Ядерная энергетика"} link={''}  style={{
                            WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))"
                        }}/>
                        <TechnoItem name={"Баллистика"} link={''}  style={{
                            WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))"
                        }}/>
                    </div>
                </Container>
            </div>
            <TechnoRightMenu />
            <BackButton/>
        </div>
            </>
    );
};

export default Techno;