import React from 'react';
import {Skill} from "./Skill";
import s from './Skills.module.css'
import {Title} from "../ForAll/Title/Title";
import react from './../assets/image/icons/atom.png'
import js from './../assets/image/icons/js.png'
import css from './../assets/image/icons/css.png'
import git from './../assets/image/icons/git.png'
import api from './../assets/image/icons/api.png'
import web from './../assets/image/icons/web.png'
import photoSh from './../assets/image/icons/photoshop.png'
import figma from './../assets/image/icons/figma.png'
import ts from './../assets/image/icons/typescript.png'
import redux from './../assets/image/icons/redux.png'
import but from './../assets/image/icons/bootstrap.png'
import ui from './../assets/image/icons/ui.png'
import unit from './../assets/image/icons/unit-testing.png'


export const Skills = () => {
    const reactIcon ={
        backgroundImage:`url(${react})`
    }
    const jsIcon ={
        backgroundImage:`url(${js})`
    }
    const cssIcon ={
        backgroundImage:`url(${css})`
    }
    const gitIcon ={
        backgroundImage:`url(${git})`
    }
    const apiIcon ={
        backgroundImage:`url(${api})`
    }
    const webIcon ={
        backgroundImage:`url(${web})`
    }
    const photoIcon ={
        backgroundImage:`url(${photoSh})`
    }
    const figmaIcon ={
        backgroundImage:`url(${figma})`
    }
    const tsIcon ={
        backgroundImage:`url(${ts})`
    }
    const reduxIcon ={
        backgroundImage:`url(${redux})`
    }
    const butIcon ={
        backgroundImage:`url(${but})`
    }
    const uiIcon ={
        backgroundImage:`url(${ui})`
    }
    const unitIcon ={
        backgroundImage:`url(${unit})`
    }
    return (
        <div className={s.skillsWrapper}>


            <div className={s.wrapper}>
               <Title title={'my skills'}/>
            <div className= {s.skills} >
                <Skill title={'JS'} description={'описание навыка JS'} style={reactIcon}/>
                <Skill title={'React'} description={'описание навыка React'} style={jsIcon}/>
                <Skill title={'CSS'} description={'описание навыка Css'} style={cssIcon}/>
                <Skill title={'GIT'} description={'описание навыка Css'} style={gitIcon}/>
                <Skill title={'REST API'} description={'описание навыка Css'} style={apiIcon}/>
                <Skill title={'WEB-Design'} description={'описание навыка Css'} style={webIcon}/>
                <Skill title={'Photoshop'} description={'описание навыка Css'}  style={photoIcon}/>
                <Skill title={'Figma'} description={'описание навыка Css'} style={figmaIcon}/>
                <Skill title={'TypeScript'} description={'описание навыка Css'} style={tsIcon}/>
                <Skill title={'Redux'} description={'описание навыка Css'} style={reduxIcon}/>
                <Skill title={'Bootstrap'} description={'описание навыка Css'} style={butIcon}/>
                <Skill title={'Material UI'} description={'описание навыка Css'} style={uiIcon}/>
                <Skill title={'Unit testing'} description={'описание навыка Css'} style={unitIcon}/>
                <Skill title={'TDD'} description={'описание навыка Css'}/>

            </div>

            </div>
        </div>
    );
};