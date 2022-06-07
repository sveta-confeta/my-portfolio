import React from 'react';
import s from "./Title.module.css"

export const Title = (props) => {
    return (
        <div className={s.title}>
            <h3 className={s.sectionTitle}>{props.title}</h3>
            <div></div>
        </div>
    );
};

