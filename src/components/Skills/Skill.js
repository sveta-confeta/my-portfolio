import React from 'react';
import s from './Skills.module.css';

export const Skill = (props) => {
    return (
        <div className={s.skillWrapper}>
            <h3 className={s.titleSkill}>
                {props.title}
            </h3>
            <div className={s.textSkill}>
                {props.description}
            </div>
        </div>
    );
};
