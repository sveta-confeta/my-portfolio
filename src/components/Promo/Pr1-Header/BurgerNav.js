import React from 'react';
import s from "./BurgerNav.module.scss";

export const BurgerNav = () => {
    let menuIsOpen=false;//нач.значение
    let onBurgerBtnClick=()=>{
        menuIsOpen=!menuIsOpen; // при клике меняется с true на false и наоборот
    }

    return (<>

            <ul className={s.mobileMenu}>
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
            <div onClick={onBurgerBtnClick} className={s.burgerBtn}>

            </div>
        </>
    );
};
