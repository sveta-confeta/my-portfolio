import React from 'react';
import {BasicModal} from "../../Common/modal/Modal";
import s from './../../Common/modal/Modal.module.scss'


export const TodolistModal = React.memo(
    ({isOpenModal, setIsOpenModal}) => {

        return (
            <BasicModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                title={'Todolist'}
                viewProgect={'https://sveta-confeta.github.io/my-todolist/#/login'}
                viewCode={'https://github.com/sveta-confeta/myTodoList'}
            >
                <div className={s.description}>
                   <div className={s.titleDescription}>
                       Create app using React, TS, Redux-Toolkit, Redux-Thunk, Axios, Formik, Material UI, unit tests
                   </div>
                    <ul className={s.list}>
                        <li>Implemented autorization</li>
                        <li>Creating, editing, deleting tasks and sorting to status</li>

                    </ul>
                </div>

            </BasicModal>
        );
    });
