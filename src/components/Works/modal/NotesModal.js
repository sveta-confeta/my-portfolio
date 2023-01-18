import React from 'react';
import {BasicModal} from "../../Common/modal/Modal";
import s from './../../Common/modal/Modal.module.scss'


export const NotesModal = React.memo(
    ({isOpenModal, setIsOpenModal}) => {

        return (
            <BasicModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                title={'Simple Notes'}
                viewProgect={'https://simple-notes-app-pearl.vercel.app/'}
                viewCode={'https://github.com/Halera-inc/simple-notes-front'}
            >
                <div className={s.description}>
                   <div className={s.titleDescription}>
                       Team project.
                       Create app using Next JS, TS, Redux, Redux-Thunk, Formic, Axios, Daisy UI, CSS, Tailwind CSS, Jirа.
                   </div>
                    <ul className={s.list}>
                        <li>Implemented authorization, login on the front side</li>
                        <li>Modal windows</li>
                        <li>light and dark themes</li>
                        <li>Photo uploads on the front side</li>
                        <li>Settings page</li>
                        <li>Mobile adaptive</li>
                        <li>pinning notes</li>
                    </ul>
                </div>

            </BasicModal>
        );
    });
