import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual'; // Стили для Virtual
import s from './Swipper.module.scss';
import Work from './Work';
import megamotoImage from './../../assets/image/Megamoto.jpg';
import loremImage from './../../assets/image/lorem-poster.jpg';
import {MegamotoModal} from './modal/MegamotoModal';
import {LoremModal} from './modal/LoremModal';
import {NotesModal} from './modal/NotesModal';
import {Title} from './../Common/Title/Title';
import learnImage from "../../assets/image/learnCard.jpg";
import {SocialModal} from "./modal/SocialModal";
import {SellerModal} from "./modal/SellerModal";
import {LearnCardModal} from "./modal/LearnCardModal";
import {GameProjModal} from "./modal/GameProjModal";
import {ScandiModal} from "./modal/ScandiModal";
import scandiImage from "../../assets/image/scandi.jpg";
import gameImage from "../../assets/image/game.jpg";
import sellerImg from "../../assets/image/seller.jpg";
import notesImage from "../../assets/image/notes.jpg";

export const SwipperWorks = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const [openModalMeg, setOpenModalMeg] = React.useState(false);
    const [openModalLorem, setOpenModalLorem] = React.useState(false);
    const [openModalSoc, setOpenModalSoc] = useState(false);
    const [openModalLearn, setOpenModalLearn] = useState(false);
    const [openModalScandi, setOpenModalScandi] = useState(false);
    const [openModalTodoAng, setOpenModalTodoAng] = useState(false);
    const [openModalSeller, setOpenModalSeller] = useState(false);
    const [openModalNotes, setOpenModalNotes] = useState(false);

    const megamoto = {backgroundImage: `url(${megamotoImage})`, backgroundSize: 'cover'};
    const lorem = {backgroundImage: `url(${loremImage})`, backgroundSize: 'cover'};
    const social = {backgroundSize: 'cover'};
    const learnCard = {backgroundImage: `url(${learnImage})`, backgroundSize: 'cover'};
    const scandi = {backgroundImage: `url(${scandiImage})`, backgroundSize: 'cover'};
    const game = {backgroundImage: `url(${gameImage})`, backgroundSize: 'cover'};
    const seller = {backgroundImage: `url(${sellerImg})`, backgroundSize: 'cover'};
    const notes = {backgroundImage: `url(${notesImage})`, backgroundSize: 'cover'};

    return (
        <div className={s.workWrapper} id={'projects'}>
            <div className={s.fon}></div>
            <Title title={'my project'}/>
            <div className={s.wrapper}>
                <Swiper
                    className={s.mySwiper}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        if (typeof swiper.params.navigation !== 'boolean') {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    slidesPerView={1}
                    breakpoints={{
                        1260: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    <SwiperSlide>
                        <Work
                            setOpenModal={setOpenModalLorem}
                            style={lorem}
                            title={'Lorem (React)'}
                            description={'Test work - gallery of paintings ( VPN required)'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work
                            setOpenModal={setOpenModalMeg}
                            style={megamoto}
                            title={'Megamoto'}
                            description={'Website for motorcycle store.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work
                            setOpenModal={setOpenModalTodoAng}
                            style={game}
                            title={'Game Project'}
                            description={'Project using HTML, SCSS, JS, Gulp'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work
                            setOpenModal={setOpenModalSeller}
                            style={seller}
                            title={'Sellers-hab'}
                            description={'landing page assembled on the React'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work
                            setOpenModal={setOpenModalNotes}
                            style={notes}
                            title={'Simple Notes'}
                            description={'Team project : a site-application of notes'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work
                            setOpenModal={setOpenModalScandi}
                            style={scandi}
                            title={'Scandi'}
                            description={'LandingPage- learn CSS-project'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work
                            setOpenModal={setOpenModalSoc}
                            style={social}
                            title={'Social network'}
                            description={'Social network.'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work
                            setOpenModal={setOpenModalLearn}
                            style={learnCard}
                            title={'Learn Cards'}
                            description={'Possibility to create learning cards with questions and answers'}
                        />
                    </SwiperSlide>
                    <div className={s.buttonsWrap}>
                    <button
                        type="button"
                        className={`${s.button} ${s.buttonPrev}`}
                        aria-label="prev cards"
                        ref={navigationPrevRef}
                    />
                    <button
                        type="button"
                        className={`${s.button} ${s.buttonNext}`}
                        aria-label="next cards"
                        ref={navigationNextRef}
                    />
                    </div>
                </Swiper>

            </div>

            <LoremModal isOpenModal={openModalLorem} setIsOpenModal={setOpenModalLorem}/>
            <MegamotoModal isOpenModal={openModalMeg} setIsOpenModal={setOpenModalMeg}/>
            <SocialModal isOpenModal={openModalSoc} setIsOpenModal={setOpenModalSoc}/>
            <LearnCardModal isOpenModal={openModalLearn} setIsOpenModal={setOpenModalLearn}/>
            <GameProjModal isOpenModal={openModalTodoAng} setIsOpenModal={setOpenModalTodoAng}/>
            <ScandiModal isOpenModal={openModalScandi} setIsOpenModal={setOpenModalScandi}/>
    <SellerModal isOpenModal={openModalSeller} setIsOpenModal={setOpenModalSeller}/>
    <NotesModal isOpenModal={openModalNotes} setIsOpenModal={setOpenModalNotes}/>
</div>
)
    ;
};