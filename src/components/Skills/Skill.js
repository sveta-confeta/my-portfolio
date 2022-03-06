import React from 'react';
import s from './Skills.module.css';

export const Skill = () => {
    return (
        <div className={s.skillWrapper}>
            <h3 className={s.titleSkill}>
                Навык
            </h3>
            <div className={s.textSkill}>
Подробное описание навыка
            </div>
        </div>
    );
};
