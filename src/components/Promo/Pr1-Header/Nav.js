import React from 'react';
import s from "./Header.module.scss";

const Nav = () => {
    return (

            <ul className={s.headerList}>
                <a href='#' className={s.headerLink}>
                    <li className={s.headerElement}>Main</li>
                </a>
                <a href='#skills' className={s.headerLink}>
                    <li className={s.headerElement}>Skills</li>
                </a>
                <a href='#projects' className={s.headerLink}>
                    <li className={s.headerElement}>Projects</li>
                </a>
                <a href='#contacts' className={s.headerLink}>
                    <li className={s.headerElement}>Contacts</li>
                </a>
            </ul>
    );
};

export default Nav;