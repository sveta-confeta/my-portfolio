import React from 'react';
import s from './Skills.module.scss';


export const Skill = (props) => {
    return (

        <div className={s.card} style={props.none}>
            <div className={`${s.face} ${s.face1}`} >
                <div className={s.contentFace}>
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
