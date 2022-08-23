import React from 'react';
import {BasicModal} from "../../Common/modal/Modal";
import s from './../../Common/modal/Modal.module.scss'


export const MegamotoModal = React.memo(
    ({isOpenModal, setIsOpenModal}) => {

        return (
            <BasicModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                title={'Megamoto'}
                viewProgect={'https://megamoto.by/'}
                viewCode={'https://bitbucket.org/Sanek_Petrovich/megamoto.by_6/src/master/'}

            >
                <div className={s.description}>
                    <div className={s.titleDescription}>
                        Website design development, page layout.
                        Create site using Css, JS-Native, library Swiper, AOS.
                    </div>

                </div>

            </BasicModal>
        );
    });
