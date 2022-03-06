import React from 'react';
import {Skill} from "./Skill";
import s from './Skills.module.css'

export const Skills = () => {
    return (
        <div className={s.skillsWrapper}>

            <div className={s.wrapper}>
                <h2>Мои скиллы</h2>
            <div className= {s.skills} >
                <Skill title={'JS'} description={'описание навыка JS'}/>
                <Skill title={'React'} description={'описание навыка React'}/>
                <Skill title={'Css'} description={'описание навыка Css'}/>

            </div>

            </div>
        </div>
    );
};