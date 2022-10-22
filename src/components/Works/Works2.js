import React, {useState} from 'react';
import Work from "./Work";
import s from './Works.module.scss'
import {Title} from "../Common/Title/Title";
import {ScandiModal} from "./modal/ScandiModal";
import scandiImage from "./../assets/image/scandi.jpg"

export const Works2 = () => {
    // const [openModalSoc,setOpenModalSoc]=useState(false)
    // const [openModalMeg,setOpenModalMeg]=useState(false)
    // const [openModalTodo,setOpenModalTodo]=useState(false)
    // const [openModalLearn,setOpenModalLearn]=useState(false)
    const [openModalScandi,setOpenModalScandi]=useState(false)
    // const social={
    //     backgroundImage:`url(${socImage})`,
    //     backgroundSize:'cover',
    // }
    // const megamoto={
    //     backgroundImage:`url(${megamotoImage})`,
    //     backgroundSize:'cover',
    // }
    // const todolist={
    //     backgroundImage:`url(${todoImage})`,
    //     backgroundSize:'cover',
    //
    // }
    // const learnCard={
    //     backgroundImage:`url(${learnImage})`,
    //     backgroundSize:'cover',
    //
    // }
    const scandi={
        backgroundImage:`url(${scandiImage})`,
        backgroundSize:'cover',

    }
    return (

        <div className={s.workWrapper} id={'projects'}>
            <div className={s.fon}></div>
         <Title title={'my project'}/>
            <div className={s.wrapper}>
                <Work  setOpenModal={setOpenModalScandi} style={scandi} title={'Scandi'}  description={'LandingPage- learn CSS-project'}/>

            </div>
            <ScandiModal isOpenModal={openModalScandi} setIsOpenModal={setOpenModalScandi}/>
        </div>
    );
};
