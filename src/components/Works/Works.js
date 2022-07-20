import React from 'react';
import Work from "./Work";
import s from './Works.module.scss'
import {Title} from "../Common/Title/Title";
import socImage from './../assets/image/Soc.jpg'
import megamotoImage from './../assets/image/Megamoto.jpg'
import todoImage from './../assets/image/todo.jpg'

const Works = () => {
    const social={
        backgroundImage:`url(${socImage})`,
        backgroundSize:'cover',
    }
    const megamoto={
        backgroundImage:`url(${megamotoImage})`,
        backgroundSize:'cover',
    }
    const todolist={
        backgroundImage:`url(${todoImage})`,
        backgroundSize:'cover',

    }
    return (

        <div className={s.workWrapper} id={'projects'}>
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