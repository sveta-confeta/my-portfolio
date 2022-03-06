import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <div className={s.container}>
                <h2 className={s.name}>Шунькова Светлана Владимировна</h2>
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

