import React, {useState} from 'react';
import Work from "./../Work";
import s from './../Works.module.scss'
import socImage from './../../assets/image/Soc.jpg'
import learnImage from  './../../assets/image/learnCard.jpg'
import {SocialModal} from "./../modal/SocialModal";
import {LearnCardModal} from "./../modal/LearnCardModal";
import {Title} from "../../Common/Title/Title";

export const WorksMob2 = () => {
    const [openModalSoc,setOpenModalSoc]=useState(false)
    const [openModalLearn,setOpenModalLearn]=useState(false)
    const social={
        backgroundImage:`url(${socImage})`,
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
                <Work setOpenModal={setOpenModalSoc} style={social} title={'Social network'}  description={'Social network'}/>
                <Work  setOpenModal={setOpenModalLearn} style={learnCard} title={'Learn Cards'}  description={'Possibility to create learning cards with questions and answers'}/>


            </div>

            <SocialModal isOpenModal={openModalSoc} setIsOpenModal={setOpenModalSoc}/>
            <LearnCardModal isOpenModal={openModalLearn} setIsOpenModal={setOpenModalLearn}/>
        </div>
    );
};
