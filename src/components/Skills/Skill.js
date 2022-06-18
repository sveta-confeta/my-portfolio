import React from 'react';
import s from './Skills.module.css';

export const Skill = (props) => {
    return (

        <div className={s.card}>
            <div className={`${s.face} ${s.face1}`} >
                <div className="content">
                    <img
                        src="https://www.flaticon.com/ru/free-icon/css-3_732190?term=css&page=1&position=1&page=1&position=1&related_id=732190&origin=search#"/>
                        <h3> {props.title}</h3>
                </div>
            </div>
            <div className={`${s.face} ${s.face2}`}>
                <div className={s.content}>
                    {props.description}

                </div>
            </div>
        </div>
)
};
