import React from 'react';
import {Container} from "react-bootstrap";
import Footer from "../Footer";
import RightMenu from "./RightMenu";
import {NavLink} from "react-router-dom";
import '../../style/talent_tree/talent_tree.scss'
import Header from "../Header";
import BackButton from "../BackButton";

function TreeItem (props){
    return(
        <div
            className='shadow-2xl m-4 rounded-lg text-white bg-treeCard h-72 w-2/5 flex justify-content-center items-center'
            style={props.style} >
            <NavLink to={props.link}>{props.name}</NavLink>
        </div>
    )
}

const TalentTree = () => {
    return (
        <div className='talent__tree-background' style={{backgroundImage: `url("images/talent_tree/talent_tree_bg.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "contain"
        }}>
            <Header/>
            <Footer />
            <Container className='talent__tree-main__box'>
                <div className='text-[62px] text-talentTree p-4 py-0 m-0'>Ветка талантов</div>
                <div className='mx-auto flex flex-wrap'>
                <TreeItem name={"Технознание"} link={'/techno'}/>
                <TreeItem name={"Обществознание"} link={''} style={{backgroundImage: `url("images/talent_tree/social_studdy.svg")`}}/>
                <TreeItem name={"Естествознание"} link={''}  style={{
                    WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))"
                }}/>
                <TreeItem name={"Человековедение"} link={''}  style={{
                    WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))"
                }}/>
            </div>
        </Container>
         <RightMenu />
         <BackButton/>
        </div>
    );
};

export default TalentTree;