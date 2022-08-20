import React from 'react';
import {BasicModal} from "../../Common/modal/Modal";
import s from './../../Common/modal/Modal.module.scss'


export const SocialModal = React.memo(
    ({isOpenModal, setIsOpenModal}) => {

        return (
            <BasicModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                title={'Social network'}
                viewProgect={''}
            >
                <div className={s.description}>
                    ggggggggggggggggggggggg
                    ggggggggggggggggggg
                    ggggggggggggggggggg
                </div>

            </BasicModal>
        );
    });
