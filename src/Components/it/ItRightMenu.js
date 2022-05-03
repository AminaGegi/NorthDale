import React from 'react';
import {NavLink} from "react-router-dom";

function TreeMenuItem (props){
    return(
        <div className='p-2'>
            <NavLink className='text-white' to={props.linkTo}> {props.name} </NavLink>
        </div>
    )
};
function RightMenuOpenElement (props) {
    return(
        <NavLink to={props.link}><img src='images/talent_tree/icon_second_level.svg' alt='second level' className='inline p-2'/><span>{props.name}</span></NavLink>
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
            <div className='pl-2'>
                <div>Информационные технологии</div>
                <div className='grid gap-2'>
                    <RightMenuOpenElement link={''} name='Системный администратор' />
                    <RightMenuOpenElement link={''} name='Front-end разработчик' />
                    <RightMenuOpenElement link={''} name='Back-end разработчик' />
                    <RightMenuOpenElement link={''} name='Тестировщик' />
                    <RightMenuOpenElement link={''} name='Системный аналитик' />
                    <RightMenuOpenElement link={''} name='Веб-дизайнер' />
                    <RightMenuOpenElement link={''} name='UX/UI дизайнер' />
                    <RightMenuOpenElement link={''} name='QA инженер' />
                    <RightMenuOpenElement link={'/fullstack'} name='Full-stack разработчик' />
                </div>
            </div>
            <TreeMenuItem linkTo={''} name={"Обществознание"} />
            <TreeMenuItem linkTo={''} name={"Естествознание"} />
            <TreeMenuItem linkTo={''} name={"Человекознание"} />

        </div>
    );
};

export default RightMenu;