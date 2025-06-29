import React from 'react';
import s from "./Header.module.scss";

const Nav = () => {
    return (
        <nav>
            <ul className={s.headerList}>
                <li className={s.headerElement}>
                    <a href='/' className={s.headerLink}>
                        Main
                    </a>
                </li>
                <li className={s.headerElement}>
                    <a href='#skills' className={s.headerLink}>
                        Skills
                    </a>
                </li>
                <li className={s.headerElement}>
                    <a href='#projects' className={s.headerLink}>
                        Projects
                    </a>
                </li>
                <li className={s.headerElement}>
                    <a href='#contacts' className={s.headerLink}>
                        Contacts
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;