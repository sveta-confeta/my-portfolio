import React from 'react';
import s from './Works.module.scss'

const Work = (props) => {

    return (
        <div className={s.card}>

            <figure className={s.cardThumb}>

                <div className={s.cardImage} style={props.style}></div>

                <figcaption className={s.cardCaption}>
                    <h2 className={s.cardTitle}>{props.title}</h2>
                    <p className={s.cardSnippet}>{props.description}</p>
                    <button onClick={()=>props.setOpenModal(true)} className={s.cardButton}>Read more</button>
                </figcaption>
            </figure>
        </div>

    );
};

export default Work;
