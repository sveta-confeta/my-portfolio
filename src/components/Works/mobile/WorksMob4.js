import React, {useState} from 'react';
import Work from "./../Work";
import s from './../Works.module.scss'
import {Title} from "../../Common/Title/Title";
import {SellerModal} from "../modal/SellerModal";

export const WorksMob4 = () => {

    const [openModalSeller,setOpenModalSeller]=useState(false)


    const seller={
        backgroundImage:`url(${seller})`,
        backgroundSize:'cover',
    }

    return (

        <div className={s.workWrapper} id={'projects'}>
            <div className={s.fon}></div>
         <Title title={'my project'}/>
            <div className={s.wrapper}>
                <Work setOpenModal={setOpenModalSeller} style={seller} title={'Sellers-hab'}  description={'landing page assembled on the React'}/>


            </div>
            <SellerModal isOpenModal={openModalSeller} setIsOpenModal={setOpenModalSeller}/>

        </div>
    );
};
