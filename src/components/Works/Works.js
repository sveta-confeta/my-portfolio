import React, {useState} from 'react';
import Work from "./Work";
import s from './Works.module.scss'
import {Title} from "../Common/Title/Title";
import socImage from './../assets/image/Soc.jpg'
import megamotoImage from './../assets/image/Megamoto.jpg'
import todoImage from './../assets/image/todo.jpg'
import learnImage from  './../assets/image/learnCard.jpg'
import {SocialModal} from "./modal/SocialModal";
import {MegamotoModal} from "./modal/MegamotoModal";
import {TodolistModal} from "./modal/TodolistModal";
import {LearnCardModal} from "./modal/LearnCardModal";
import {ScandiModal} from "./modal/ScandiModal";
import scandiImage from "./../assets/image/scandi.jpg"

const Works = () => {
    const [openModalSoc,setOpenModalSoc]=useState(false)
    const [openModalMeg,setOpenModalMeg]=useState(false)
    const [openModalTodo,setOpenModalTodo]=useState(false)
    const [openModalLearn,setOpenModalLearn]=useState(false)
    const [openModalScandi,setOpenModalScandi]=useState(false)
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
    const scandi={
        backgroundImage:`url(${scandiImage})`,
        backgroundSize:'cover',

    }
    return (

        <div className={s.workWrapper} id={'projects'}>
            <div className={s.fon}></div>
         <Title title={'my project'}/>
            <div className={s.wrapper}>
                <Work  setOpenModal={setOpenModalTodo} style={todolist} title={'Todolist'} description={'Todolist for planning yor tasks and affairs'}/>
                <Work setOpenModal={setOpenModalSoc} style={social} title={'Social network'}  description={'Social network'}/>
                <Work setOpenModal={setOpenModalMeg} style={megamoto} title={'Megamoto'}  description={'Website describing the work of the store.Help in choosing a product'}/>
                <Work  setOpenModal={setOpenModalLearn} style={learnCard} title={'Learn Cards'}  description={'Possibility to create learning cards with questions and answers'}/>
                <Work  setOpenModal={setOpenModalScandi} style={scandi} title={'Scandi'}  description={'LandingPage- learn CSS-project'}/>

            </div>
            <MegamotoModal isOpenModal={openModalMeg} setIsOpenModal={setOpenModalMeg}/>
            <SocialModal isOpenModal={openModalSoc} setIsOpenModal={setOpenModalSoc}/>
            <TodolistModal isOpenModal={openModalTodo} setIsOpenModal={setOpenModalTodo}/>
            <LearnCardModal isOpenModal={openModalLearn} setIsOpenModal={setOpenModalLearn}/>
            <ScandiModal isOpenModal={openModalScandi} setIsOpenModal={setOpenModalScandi}/>
        </div>
    );
};

export default Works;