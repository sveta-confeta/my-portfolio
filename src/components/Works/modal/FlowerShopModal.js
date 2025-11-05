import React from 'react';
import {BasicModal} from "../../Common/modal/Modal";
import s from './../../Common/modal/Modal.module.scss'


export const FlowerShopModal = React.memo(
    ({isOpenModal, setIsOpenModal}) => {

        return (
            <BasicModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                title={'Flower Shop (Nuxt4)'}
                viewProgect={'https://sveta-confeta.github.io/flower-shop/'}
                viewCode={'https://github.com/sveta-confeta/flower-shop'}
            >
                <div className={s.description}>
                    <div className={s.titleDescription}> Create project using Nuxt4, Swiper, i18n, vee-validate, pinia </div>

                </div>

            </BasicModal>
        );
    });
