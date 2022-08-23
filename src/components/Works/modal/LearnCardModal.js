import React from 'react';
import {BasicModal} from "../../Common/modal/Modal";
import s from './../../Common/modal/Modal.module.scss'


export const LearnCardModal = React.memo(
    ({isOpenModal, setIsOpenModal}) => {

        return (
            <BasicModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                title={'Learn Cards'}
                viewProgect={'https://sveta-confeta.github.io/educational-project/'}
                viewCode={'https://github.com/sveta-confeta/educational-project'}
            >
                <div className={s.description}>
                    <div className={s.titleDescription}>Create app using React, TS, Redux, Material UI, Redux-Thunk, Axios, Formik</div>
                    <ul className={s.list}>
                        <li>Implemented autorization</li>
                        <li>Ability to create learning cards and learn from them</li>
                        <li>Profile editing</li>
                        <li>Create edit, delete cards with questions and answers</li>
                        <li>Switching to the card learning mode the ability to edit and delete</li>
                    </ul>

                </div>

            </BasicModal>
        );
    });
