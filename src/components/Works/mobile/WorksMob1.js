import React, {useState} from 'react';
import Work from "./../Work";
import s from './../Works.module.scss'
import megamotoImage from '../../../assets/image/Megamoto.jpg'
import todoImage from '../../../assets/image/todo.jpg'
import {MegamotoModal} from "./../modal/MegamotoModal";
import {LoremModal} from "../modal/LoremModal";

import {Title} from "../../Common/Title/Title";

export const WorksMob1 = () => {

    const [openModalMeg, setOpenModalMeg] = useState(false)
    const [openModalTodo, setOpenModalTodo] = useState(false)


    const megamoto = {
        backgroundImage: `url(${megamotoImage})`,
        backgroundSize: 'cover',
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
        backgroundSize: 'cover',

    }

    return (

        <div className={s.workWrapper} id={'projects'}>
            <div className={s.fon}></div>
            <Title title={'my project'}/>
            <div className={s.wrapper}>

                <Work setOpenModal={setOpenModalTodo} style={todolist} title={'Todolist'}
                      description={'Todolist for planning yor tasks and affairs'}/>
                <Work setOpenModal={setOpenModalMeg} style={megamoto} title={'Megamoto'}
                      description={'Website describing the work of the store.Help in choosing a product'}/>

            </div>
            <MegamotoModal isOpenModal={openModalMeg} setIsOpenModal={setOpenModalMeg}/>
            <LoremModal isOpenModal={openModalTodo} setIsOpenModal={setOpenModalTodo}/>
        </div>
    );
};
