import React from 'react';
import {BasicModal} from "../../Common/modal/Modal";
import s from './../../Common/modal/Modal.module.scss'


export const GameProjModal = React.memo(
    ({isOpenModal, setIsOpenModal}) => {

        return (
            <BasicModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                title={'Game Project (JS)'}
                viewProgect={'https://sveta-confeta.github.io/game-project/'}
                viewCode={'https://github.com/sveta-confeta/game-project'}
            >
                <div className={s.description}>
                    <div className={s.titleDescription}> Create project using HTML, SCSS, JS, Gulp </div>
                    <ul className={s.list}>
                        <li>Authorization & Login</li>
                        <li>Cookie Policy Modal</li>
                        <li>Story Slider (Stories) </li>
                        <li>Favorites</li>
                        <li>Search</li>
                        <li>Alphabetical Navigation</li>
                    </ul>

                </div>

            </BasicModal>
        );
    });
