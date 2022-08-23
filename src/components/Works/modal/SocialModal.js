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
                viewCode={'https://github.com/sveta-confeta/social-network-new-version'}
            >
                <div className={s.description}>
                    <div className={s.titleDescription}>
                        Create app using React, TS, Redux-Thunk, Axios, Formik, Material UI, unit tests
                    </div>
                    <ul className={s.list}>
                        <li>Implemented autorization</li>
                        <li>Profile editing</li>
                        <li>Correspondence with other users</li>
                        <li>Navigation through user pages</li>
                        <li>Follow and unfollow</li>

                    </ul>
                    <div className={s.error}>Attention! Website design in development! Sorry for the inconvenience.</div>
                </div>

            </BasicModal>
        );
    });
