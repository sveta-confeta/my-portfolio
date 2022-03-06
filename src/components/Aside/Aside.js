import React from 'react';
import s from './Aside.module.css'

const Aside = () => {
    return (
        <div>
            <div className={s.telework}></div>
            <button className={s.btn}>Нанять меня</button>
        </div>
    );
};

export default Aside;