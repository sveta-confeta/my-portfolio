import React from 'react';
import s from './Header.module.scss'
import Nav from "./Nav";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <Nav/>
            </div>

        </div>
    );
};

