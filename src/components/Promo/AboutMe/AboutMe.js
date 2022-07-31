import React from 'react';
import s from "./AboutMe.module.scss";


const AboutMe = () => {

    return (
        <div className={s.abouteWrapper}>
            <div className={s.container}>
                <div className={s.img}>
                </div>
                <div className={s.title}><div className={s.sectionTitle}> A STORY ABOUT ME </div></div>
                <p className={s.aboutP}>I'm Svetlana Shunkova and I'm a responsible and motivated developer with
                    experience in creating SPA, JS (Typescript), React, Redux,
                    leading-page using CSS and SASS. Now I am improving my
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