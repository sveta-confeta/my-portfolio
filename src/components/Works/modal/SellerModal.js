import React from 'react';
import {BasicModal} from "../../Common/modal/Modal";
import s from './../../Common/modal/Modal.module.scss'


export const SellerModal = React.memo(
    ({isOpenModal, setIsOpenModal}) => {

        return (
            <BasicModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                title={'Sellers-hab'}
                viewProgect={'https://sveta-confeta.github.io/sellers-hab/'}
                viewCode={'https://github.com/sveta-confeta/sellers-hab'}
            >
                <div className={s.description}>
                   <div className={s.titleDescription}>
                       Test landing page create using React,TS in 3.5 days according to the principle "Pixel perfect"
                   </div>
                    <ul className={s.list}>
                        <li>Use flex and grid</li>
                        <li>mp4 inserted</li>
                        <li>mobile version</li>

                    </ul>
                </div>

            </BasicModal>
        );
    });
