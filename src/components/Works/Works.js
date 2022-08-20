import React, {useState} from 'react';
import Work from "./Work";
import s from './Works.module.scss'
import {Title} from "../Common/Title/Title";
import socImage from './../assets/image/Soc.jpg'
import megamotoImage from './../assets/image/Megamoto.jpg'
import todoImage from './../assets/image/todo.jpg'
import learnImage from  './../assets/image/learnCard.jpg'
import {SocialModal} from "./modal/SocialModal";

const Works = () => {
    const [openModal,setOpenModal]=useState(false)
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
    const learnCard={
        backgroundImage:`url(${learnImage})`,
        backgroundSize:'cover',

    }
    return (

        <div className={s.workWrapper} id={'projects'}>
            <div className={s.fon}></div>
         <Title title={'my project'}/>
            <div className={s.wrapper}>
                <Work  setOpenModal={setOpenModal} style={todolist} title={'Todolist'} description={'описание проекта "Todolist"'}/>
                <Work setOpenModal={setOpenModal} style={social} title={'Social network'}  description={'описание проекта "Social network"'}/>
                <Work setOpenModal={setOpenModal} style={megamoto} title={'Megamoto'}  description={'описание проекта "Counter" "Counter'}/>
                <Work  setOpenModal={setOpenModal} style={learnCard} title={'Learn Cards'}  description={'описание проекта "Learn Cards"'}/>

            </div>
            <SocialModal isOpenModal={openModal}
            setIsOpenModal={setOpenModal}/>
        </div>
    );
};

export default Works;