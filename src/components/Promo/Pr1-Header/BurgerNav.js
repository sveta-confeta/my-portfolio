import React, {useState} from 'react';
import s from "./BurgerNav.module.scss";

export const BurgerNav = () => {

   // чтоб все перерисовывалось нужен хук-)
    const [menuIsOpen,setMenuIsOpen]=useState(false);

    let onBurgerBtnClick=()=>{
        setMenuIsOpen(!menuIsOpen) // при клике меняется с true на false и наоборот
    }

    return (< div className={s.burgerNav}>

            <ul className={menuIsOpen ?  `${s.mobileMenu} ${s.show}` : s.mobileMenu}>
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
        </div>
    );
};
