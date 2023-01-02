import React, {useEffect, useState} from 'react';
import {Skill} from "./Skill";
import s from './Skills.module.scss'
import {Title} from "../Common/Title/Title";
import react from './../assets/image/icons/atom.png'
import js from './../assets/image/icons/js.png'
import css from './../assets/image/icons/css.png'
import git from './../assets/image/icons/git.png'
import api from './../assets/image/icons/api.png'
import web from './../assets/image/icons/web.png'
import photoSh from './../assets/image/icons/photoshop.png'
import figma from './../assets/image/icons/figma.png'
import ts from './../assets/image/icons/typescript.png'
import unit from './../assets/image/icons/unit-testing.png'
import st from './../assets/image/icons/book.png'
import ang from './../assets/image/icons/angular.png'
import redux from './../assets/image/icons/redux.png'


export const Skills = () => {
    const reduxIcon = {
        backgroundImage: `url(${redux})`
    }
    const angularIcon = {
        backgroundImage: `url(${ang})`
    }
    const reactIcon = {
        backgroundImage: `url(${react})`
    }
    const jsIcon = {
        backgroundImage: `url(${js})`
    }
    const cssIcon = {
        backgroundImage: `url(${css})`
    }
    const gitIcon = {
        backgroundImage: `url(${git})`
    }
    const apiIcon = {
        backgroundImage: `url(${api})`
    }
    const webIcon = {
        backgroundImage: `url(${web})`
    }
    const photoIcon = {
        backgroundImage: `url(${photoSh})`
    }
    const figmaIcon = {
        backgroundImage: `url(${figma})`
    }
    const tsIcon = {
        backgroundImage: `url(${ts})`
    }
    const unitIcon = {
        backgroundImage: `url(${unit})`,

    }
    const storybook = {
        backgroundImage: `url(${st})`,
    }

    const [show, setShow] = useState(true);


    useEffect(()=>{
        if(window.innerWidth <= 706){
            setShow(false)
        }
    },[window.innerWidth])

    // window.screen.width

    const closedOpenHandler=()=>{
        setShow(!show)
    }


    return (
        <div className={s.skillsWrapper} id={'skills'}>


            <div className={s.wrapper}>
                <Title title={'my skills'}/>
                <div className={s.skills}>
                    <Skill title={'React'} description={'Class components, Function components,Router, Next'} style={reactIcon}/>
                    <Skill title={'TypeScript'}
                           description={'It is a better programming language compared to JS because it has strongly typed'}
                           style={tsIcon}/>
                    <Skill title={'Angular'} description={'Basic'} style={angularIcon}/>
                    <Skill title={'JavaScript'} description={'Asynchronous programming, functional programming'}
                           style={jsIcon}/>
                    <Skill title={'Redux'} description={'Redux-Thunk, Redux-Saga, Redux-Toolkit'}
                           style={reduxIcon}/>
                    <Skill title={'REST API'} description={'Axios, Fetch, Postman, Formik'} style={apiIcon}/>
                    {show ? <>
                            <Skill title={'CSS'} description={'SASS, BEM, adaptive layout'}
                                   style={cssIcon}/>
                            <Skill title={'GIT'} description={'GitHab, work in a team, git merge'} style={gitIcon}/>
                            <Skill title={'CSS Frameworks'}
                                   description={'Bootstrap, Material UI, Tailwind'} style={webIcon}/>
                            <Skill title={'Photoshop'}
                                   description={'Creating of the layout and elements of the site,' +
                                       'layout according to the layout of the site'} style={photoIcon}/>
                            <Skill title={'Figma'} description={'Layout according to the layout of the site'}
                                   style={figmaIcon}/>

                            <Skill title={'Unit testing'}
                                   description={'Isolating the written code for testing and determining whether it works as intended '}
                                   style={unitIcon}/>


                            <Skill title={'StoryBook'}
                                   description={'Storybook  for building UI components and pages in isolation'}
                                   style={storybook}/> </>

                        : ''}
                </div>
                <button className={s.btn} onClick= {closedOpenHandler}> { !show ? "show more" : "close"}
                </button>


            </div>
        </div>
    );
};