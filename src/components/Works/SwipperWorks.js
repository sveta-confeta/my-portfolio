import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/scss";
import s from './Swipper.module.scss'
import {Navigation} from "swiper";


import {Works1} from "./Works1";
import {Works2} from "./Works2";

import {WorksMob1} from "./mobile/WorksMob1";
import {WorksMob2} from "./mobile/WorksMob2";
import {WorksMob3} from "./mobile/WorksMob3";
import {WorksMob4} from "./mobile/WorksMob4";



export const SwipperWorks = () => {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (

        <>
            <Swiper modules={[Navigation]}
                    navigation={{
                        nextEl: navigationNextRef.current,
                        prevEl: navigationPrevRef.current,
                        disabledClass: 'disabled',


                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.nextEl = navigationNextRef.current
                        swiper.params.navigation.prevEl = navigationPrevRef.current
                        console.log(navigationNextRef.current)
                    }}
                    id="projects"
                    className="mySwiper">

                <SwiperSlide className={s.decstop}><Works1/></SwiperSlide>
                <SwiperSlide className={s.decstop}><Works2/></SwiperSlide>


                <SwiperSlide className={s.mobile}><WorksMob1/></SwiperSlide>
                <SwiperSlide className={s.mobile}><WorksMob2/></SwiperSlide>
                <SwiperSlide className={s.mobile}><WorksMob3/></SwiperSlide>
                <SwiperSlide className={s.mobile}><WorksMob4/></SwiperSlide>

                <button className={`${s.button} ${s.button1}`}
                        ref={navigationNextRef}>

                </button>
                <button className={`${s.button} ${s.button2}`}
                        ref={navigationPrevRef}>

                </button>
            </Swiper>

        </>
    );
};

