import React from 'react';
import {NavLink} from "react-router-dom";

function TreeMenuItem (props){
    return(
        <div className='p-2'>
            <NavLink className='text-white' to={props.linkTo}> {props.name} </NavLink>
        </div>
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
            <TreeMenuItem linkTo={'/techno'} name={"Обществознание"} />
            <TreeMenuItem linkTo={'/techno'} name={"Естествознание"} />
            <TreeMenuItem linkTo={'/techno'} name={"Человекознание"} />

        </div>
    );
};

export default RightMenu;