import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import s from './Swipper.module.scss'
import {Navigation} from "swiper";


import {Works1} from "./Works1";
import {Works2} from "./Works2";

export const SwipperWorks = () => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (

        <>
            <Swiper modules={[Navigation]}
                    navigation={{
                        nextEl: navigationNextRef.current,
                        prevEl: navigationPrevRef.current,
                        disabledClass: 'my-button-disabled',

                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.nextEl = navigationNextRef.current
                        swiper.params.navigation.prevEl = navigationPrevRef.current
                    }}
                    className="mySwiper">
                <SwiperSlide><Works1/></SwiperSlide>
                <SwiperSlide className={s.swipperContainer}><Works2/></SwiperSlide>
                {/*<SwiperSlide>Slide 3</SwiperSlide>   cтраницы слайдера*/}
                {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 5</SwiperSlide>*/}
                <div className={`${s.button} ${s.button1}`} ref={navigationNextRef}>

                </div>
                <div className={`${s.button} ${s.button2}`} ref={navigationPrevRef}>

                </div>
            </Swiper>

        </>
    );
};

