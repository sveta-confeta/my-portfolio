import React from 'react';
import Work from "./Work";
import s from './Works.module.css'
import {Title} from "../ForAll/Title/Title";
import socImage from './../assets/image/Soc.jpg'
import megamotoImage from './../assets/image/Megamoto.jpg'
import todoImage from './../assets/image/todo.jpg'

const Works = () => {
    const social={
        backgroundImage:`url(${socImage})`,
    }
    const megamoto={
        backgroundImage:`url(${megamotoImage})`,
    }
    const todolist={
        backgroundImage:`url(${todoImage})`,
    }
    return (

        <div className={s.workWrapper}>
         <Title title={'my project'}/>
            <div className={s.wrapper}>
                <Work style={todolist} title={'Todolist'} description={'описание проекта "Todolist"'}/>
                <Work style={social} title={'Social network'}  description={'описание проекта "Social network"'}/>
                <Work style={megamoto} title={'Leading Page'}  description={'описание проекта "Counter" "Counter'}/>

            </div>
        </div>
    );
};

export default Works;