import React from 'react';
import {BasicModal} from "../../Common/modal/Modal";
import s from './../../Common/modal/Modal.module.scss'


export const LoremModal = React.memo(
    ({isOpenModal, setIsOpenModal}) => {

        return (
            <BasicModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                title={'Lorem'}
                viewProgect={'https://sveta-confeta.github.io/lorem-project/#/login'}
                viewCode={'https://github.com/sveta-confeta/lorem-project'}
            >
                <div className={s.description}>
                   <div className={s.titleDescription}>
                       Create app using React, TS, Context, Axios
                   </div>
                </div>

            </BasicModal>
        );
    });
