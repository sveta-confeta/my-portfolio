import React from 'react';
import {BasicModal} from "../../Common/modal/Modal";
import s from './../../Common/modal/Modal.module.scss'


export const TodoAngModal = React.memo(
    ({isOpenModal, setIsOpenModal}) => {

        return (
            <BasicModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                title={'Todolist (Angular)'}
                viewProgect={'https://sveta-confeta.github.io/todolists-angular/'}
                viewCode={'https://github.com/sveta-confeta/todolists-angular'}
            >
                <div className={s.description}>
                    <div className={s.titleDescription}> Create app using Angular, RJX </div>
                    <ul className={s.list}>
                        <li>Implemented autorization</li>
                        <li>Creating, editing, deleting tasks and sorting to status</li>
                    </ul>

                </div>

            </BasicModal>
        );
    });
