import React from 'react';
import s from "./AboutMe.module.scss";
import {Title} from "../Common/Title/Title";

const AboutMe = () => {
    return (
        <div className={s.abouteWrapper}>
            <div className={s.container}>
              <Title title={'A STORY ABOUT ME'}/>
                <p className={s.aboutP}>I'm Svetlana Shunkova and I'm a freelance Web Designer.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>


            </div>
        </div>
    );
};

export default AboutMe;