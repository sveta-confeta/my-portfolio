import React, {useState} from 'react';
import Work from "./../Work";
import s from './../Works.module.scss'
import {Title} from "../../Common/Title/Title";
import {ScandiModal} from "./../modal/ScandiModal";
import scandiImage from "./../../assets/image/scandi.jpg"

export const WorksMob3 = () => {

    const [openModalScandi,setOpenModalScandi]=useState(false)
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
