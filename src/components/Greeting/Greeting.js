import React from 'react';
import s from './Greeting.module.css'

const Greeting = () => {
    return (
        <div className={`${s.infoMain} ${s.container}`}>
            <div className={s.text}>
                <p>Привет!</p>
                <h1>Меня зовут Светлана Шунькова</h1>
                <p>Я front-end разработчик</p>
            </div>
            <div className={s.foto}>

            </div>
        </div>
    );
};

export default Greeting;