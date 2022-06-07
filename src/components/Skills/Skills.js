import React from 'react';
import {Skill} from "./Skill";
import s from './Skills.module.css'
import {Title} from "../ForAll/Title/Title";

export const Skills = () => {
    return (
        <div className={s.skillsWrapper}>


            <div className={s.wrapper}>
               <Title title={'my skills'}/>
            <div className= {s.skills} >
                <Skill title={'JS'} description={'описание навыка JS'}/>
                <Skill title={'React'} description={'описание навыка React'}/>
                <Skill title={'CSS'} description={'описание навыка Css'}/>
                <Skill title={'GIT'} description={'описание навыка Css'}/>
                <Skill title={'REST API'} description={'описание навыка Css'}/>
                <Skill title={'WEB-Design'} description={'описание навыка Css'}/>
                <Skill title={'Photoshop'} description={'описание навыка Css'}/>
                <Skill title={'Figma'} description={'описание навыка Css'}/>
                <Skill title={'TypeScript'} description={'описание навыка Css'}/>
                <Skill title={'Redux'} description={'описание навыка Css'}/>
                <Skill title={'Bootstrap'} description={'описание навыка Css'}/>
                <Skill title={'Material UI'} description={'описание навыка Css'}/>
                <Skill title={'Unit testing'} description={'описание навыка Css'}/>
                <Skill title={'TDD'} description={'описание навыка Css'}/>




            </div>

            </div>
        </div>
    );
};