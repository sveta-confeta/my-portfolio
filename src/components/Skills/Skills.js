import React from 'react';
import {Skill} from "./Skill";
import s from './Skills.module.css'

export const Skills = () => {
    return (
        <div className={s.skillsWrapper}>
            <h2>Мои скиллы</h2>
            <div className={s.skills}>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>

        </div>
    );
};