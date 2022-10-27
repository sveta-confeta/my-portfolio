import React from 'react';
import s from './Footer.module.scss'
import {Title} from "../Common/Title/Title";
import {FooterIcons} from "./FooterIcons";

export const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <div className={s.fon}></div>
            <div className={s.container}>
                <Title title={'Shunkova Svetlana'}/>
              <FooterIcons/>
              <div className={s.footerText}>2022 Все права защищены</div>
            </div>
        </div>
    );
};

