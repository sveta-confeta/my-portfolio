import React from 'react';
import s from './Header.module.scss'
import Nav from "./Nav";
import {BurgerNav} from "./BurgerNav";
import {Download} from "../../download/Download";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <Download/>
                <Nav/>
                <BurgerNav/>
            </div>

        </div>
    );
};

