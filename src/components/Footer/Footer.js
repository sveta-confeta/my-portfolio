import React from 'react';
import s from './Footer.module.scss'
import {Title} from "../Common/Title/Title";

export const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <div className={s.container}>
               <Title title={'Shunkova Svetlana'}/>
                <div className={s.iconGroup}>
                    <div className={s.iconElement}> </div>
                    <div className={s.iconElement}> </div>
                    <div className={s.iconElement}> </div>
                    <div className={s.iconElement}> </div>
                </div>
                <div className={s.footerText}>2022 Все права защищены</div>
            </div>
        </div>
    );
};

