import React, {useState} from 'react';
import Work from "./Work";
import s from './Works.module.scss'
import todoAngImage from './../assets/image/todoAngImg.jpg'
import megamotoImage from './../assets/image/Megamoto.jpg'
import todoImage from './../assets/image/todo.jpg'
import learnImage from  './../assets/image/learnCard.jpg'
import {SocialModal} from "./modal/SocialModal";
import {MegamotoModal} from "./modal/MegamotoModal";
import {TodolistModal} from "./modal/TodolistModal";
import {LearnCardModal} from "./modal/LearnCardModal";
import {Title} from "../Common/Title/Title";
import {TodoAngModal} from "./modal/TodoAngModal";

export const Works1 = () => {
    const [openModalTodoAng,setOpenModalTodoAng]=useState(false)
    const [openModalMeg,setOpenModalMeg]=useState(false)
    const [openModalTodo,setOpenModalTodo]=useState(false)
    const [openModalLearn,setOpenModalLearn]=useState(false)

    const todoAngular={
        backgroundImage:`url(${todoAngImage})`,
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

                <Work  setOpenModal={setOpenModalTodo} style={todolist} title={'Todolist (React)'} description={'Todolist for planning your tasks and affairs'}/>
                <Work setOpenModal={setOpenModalTodoAng} style={todoAngular} title={'Todolist (Angular)'}  description={'Todolist for planning your tasks and affairs'}/>
                <Work setOpenModal={setOpenModalMeg} style={megamoto} title={'Megamoto'}  description={'Website describing the work of the store.Help in choosing a product'}/>
                <Work  setOpenModal={setOpenModalLearn} style={learnCard} title={'Learn Cards'}  description={'Possibility to create learning cards with questions and answers'}/>


            </div>
            <MegamotoModal isOpenModal={openModalMeg} setIsOpenModal={setOpenModalMeg}/>
            <TodoAngModal isOpenModal={openModalTodoAng} setIsOpenModal={setOpenModalTodoAng}/>
            <TodolistModal isOpenModal={openModalTodo} setIsOpenModal={setOpenModalTodo}/>
            <LearnCardModal isOpenModal={openModalLearn} setIsOpenModal={setOpenModalLearn}/>
        </div>
    );
};
