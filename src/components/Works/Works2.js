import React, {useState} from 'react';
import Work from "./Work";
import s from './Works.module.scss'
import {Title} from "../Common/Title/Title";
import {ScandiModal} from "./modal/ScandiModal";
import scandiImage from "./../assets/image/scandi.jpg"
import {SocialModal} from "./modal/SocialModal";
import socImage from "../assets/image/Soc.jpg";
import sellerImg from "../assets/image/seller.jpg";
import {SellerModal} from "./modal/SellerModal";
import notesImage from "../assets/image/notes.jpg"
import {NotesModal} from  "./modal/NotesModal";

export const Works2 = () => {

    const [openModalScandi,setOpenModalScandi]=useState(false)
    const [openModalSoc,setOpenModalSoc]=useState(false)
    const [openModalSeller,setOpenModalSeller]=useState(false)
    const [openModalNotes,setOpenModalNotes]=useState(false)
    const scandi={
        backgroundImage:`url(${scandiImage})`,
        backgroundSize:'cover',
    }
    const social={
        backgroundImage:`url(${socImage})`,
        backgroundSize:'cover',
    }
    const seller={
        backgroundImage:`url(${sellerImg})`,
        backgroundSize:'cover',
    }
    const notes={
        backgroundImage:`url(${notesImage})`,
        backgroundSize:'cover',
    }
    return (

        <div className={s.workWrapper} id={'projects'}>
            <div className={s.fon}></div>
         <Title title={'my project'}/>
            <div className={s.wrapper}>
                <Work  setOpenModal={setOpenModalScandi} style={scandi} title={'Scandi'}  description={'LandingPage- learn CSS-project'}/>
                <Work setOpenModal={setOpenModalSoc} style={social} title={'Social network'}  description={'Social network'}/>
                <Work setOpenModal={setOpenModalSeller} style={seller} title={'Sellers-hab'}  description={'Landing page assembled on the React'}/>
                <Work setOpenModal={setOpenModalNotes} style={notes} title={'Simple Notes'}  description={'Team project : a site-application of notes'}/>

            </div>
            <ScandiModal isOpenModal={openModalScandi} setIsOpenModal={setOpenModalScandi}/>
            <SocialModal isOpenModal={openModalSoc} setIsOpenModal={setOpenModalSoc}/>
            <SellerModal isOpenModal={openModalSeller} setIsOpenModal={setOpenModalSeller}/>
            <NotesModal isOpenModal={openModalNotes} setIsOpenModal={setOpenModalNotes}/>
        </div>
    );
};
