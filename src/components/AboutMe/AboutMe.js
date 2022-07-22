import React from 'react';
import s from "./AboutMe.module.scss";
import {Title} from "../Common/Title/Title";

const AboutMe = () => {
    return (
        <div className={s.abouteWrapper}>
            <div className={s.container}>
              <Title title={'A STORY ABOUT ME'}/>
                <p className={s.aboutP}>I'm Svetlana Shunkova and I'm a responsible and motivated developer with
                    experience in creating SPA, JS (Typescript), React, Redux,
                    leading-page using CSS and Sass. Now I am improving my
                    skills in this direction and expanding them with the help of
                    new technologies. I spend my leisure time studying books,
                    as well as improving my English.
                    I will adapt to any requirements of the company.
                </p>


            </div>
        </div>
    );
};

export default AboutMe;