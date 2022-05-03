import React from 'react';
import {Link, NavLink} from "react-router-dom";

function TreeMenuItem (props){
    return(
        <div className='p-2'>
            <Link className='text-white' to={props.linkTo}> {props.name} </Link>
        </div>
    )
};
function RightMenuOpenElement (props) {
    return(
        <NavLink to={props.link}><img src='images/talent_tree/icon_second_level.svg' className='inline p-2'/><span>{props.name}</span></NavLink>
    )
};

const RightMenu = () => {
    return (
        <div
            className='
                h-screen w-72
                bg-[#584264]
                text-white
                fixed top-0 right-0
                flex-column
                pt-36 pl-10'>
            <div>
                <img src='images/talent_tree/branch_expend.svg' alt='tree_ico' className='pb-10'/>
            </div>
            <TreeMenuItem linkTo={'/techno'} name={"Технознание"} />
            <div className='grid gap-2'>
                <RightMenuOpenElement link={''} name='Архитектура' />
                <RightMenuOpenElement link={''} name='Биотехнология' />
                <RightMenuOpenElement link={'/it'} name='Информационные технологии' />
                <RightMenuOpenElement link={''} name='Кораблестроение' />
                <RightMenuOpenElement link={''} name='Космонавтика' />
                <RightMenuOpenElement link={''} name='Криптография' />
                <RightMenuOpenElement link={''} name='Машиностроение' />
                <RightMenuOpenElement link={''} name='Электротехника' />
                <RightMenuOpenElement link={''} name='Ядерная энергетика' />
                <RightMenuOpenElement link={''} name='Баллистика' />
            </div>
            <TreeMenuItem linkTo={''} name={"Обществознание"} />
            <TreeMenuItem linkTo={''} name={"Естествознание"} />
            <TreeMenuItem linkTo={''} name={"Человекознание"} />

        </div>
    );
};

export default RightMenu;