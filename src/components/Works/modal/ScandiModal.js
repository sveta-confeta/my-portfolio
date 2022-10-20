import React from 'react';
import {BasicModal} from "../../Common/modal/Modal";
import s from './../../Common/modal/Modal.module.scss'


export const ScandiModal = React.memo(
    ({isOpenModal, setIsOpenModal}) => {

        return (
            <BasicModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                title={'Scandi'}
                viewProgect={'https://sveta-confeta.github.io/Scandi/'}
                viewCode={'https://github.com/sveta-confeta/Scandi/tree/master'}
            >
                <div className={s.description}>
                   {/*<div className={s.titleDescription}>*/}
                   {/*    Create app using React, TS, Redux-Toolkit, Redux-Thunk, Axios, Formik, Material UI, unit tests*/}
                   {/*</div>*/}
                   {/* <ul className={s.list}>*/}
                   {/*     <li>Implemented autorization</li>*/}
                   {/*     <li>Creating, editing, deleting tasks</li>*/}

                   {/* </ul>*/}
                </div>

            </BasicModal>
        );
    });
