import React, {useState} from 'react';
import s from "./BurgerNav.module.scss";

export const BurgerNav = () => {
    const [menuIsOpen,setMenuIsOpen]=useState(false);

    let onBurgerBtnClick=()=>{
        setMenuIsOpen(!menuIsOpen);
    }
    const closeMenu = () => {
        setMenuIsOpen(false);
    };

    return (<div className={s.burgerNav}>
            <nav>
                <ul className={menuIsOpen ? `${s.mobileMenu} ${s.show}` : s.mobileMenu}>
                    <li className={s.headerElement}>
                        <a href="/" className={s.headerLink} onClick={closeMenu}>
                            Main
                        </a>
                    </li>
                    <li className={s.headerElement}>
                        <a href="#skills" className={s.headerLink} onClick={closeMenu}>
                            Skills
                        </a>
                    </li>
                    <li className={s.headerElement}>
                        <a href="#projects" className={s.headerLink} onClick={closeMenu}>
                            Projects
                        </a>
                    </li>
                    <li className={s.headerElement}>
                        <a href="#contacts" className={s.headerLink} onClick={closeMenu}>
                            Contacts
                        </a>
                    </li>
                </ul>
            </nav>
            <button type="button" onClick={onBurgerBtnClick} className={s.burgerBtn} aria-label="mobile menu">
            </button>
        </div>
    );
};
