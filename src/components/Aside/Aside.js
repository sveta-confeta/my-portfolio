import React from 'react';
import s from './Aside.module.css'

const Aside = () => {
    return (
        <div className={s.wrapperAside}>
            <div className={s.container}>
                <div className={s.telework}>
                    Рассматриваю варианты удаленной работы
                </div>
                <button className={s.btn}>Нанять меня</button>
            </div>
        </div>
    );
};

export default Aside;