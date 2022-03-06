import React from 'react';
import s from './Works.module.css'

const Work = (props) => {
    return (
        <div className={s.oneWork}>
            <div className={s.img}></div>
            <div className={s.titleProject}>{props.title} </div>
            <div className={s.description}>{props.description} </div>
        </div>
    );
};

export default Work;