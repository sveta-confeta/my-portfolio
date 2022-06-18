import React from 'react';
import s from './Skills.module.css';


export const Skill = (props) => {
    return (

        <div className={s.card}>
            <div className={`${s.face} ${s.face1}`} >
                <div className="content">
                    <div className={s.icon} style={props.style}>
                    </div>
                        <h3> {props.title}</h3>
                </div>
            </div>
            <div className={`${s.face} ${s.face2}`}>
                <div className={s.content}>
                    {props.description}

                </div>
            </div>
        </div>
)
};
