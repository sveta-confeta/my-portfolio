import React from 'react';
import s from "./Header.module.css";

const Nav = () => {
    return (

            <ul className={s.headerList}>
                <a href='#' className={s.headerLink}>
                    <li className={s.headerElement}>Главная</li>
                </a>
                <a href='#' className={s.headerLink}>
                    <li className={s.headerElement}>Скиллы</li>
                </a>
                <a href='#' className={s.headerLink}>
                    <li className={s.headerElement}>Работы</li>
                </a>
                <a href='#' className={s.headerLink}>
                    <li className={s.headerElement}>Контакты</li>
                </a>
            </ul>
    );
};

export default Nav;