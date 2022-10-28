import React from 'react';
import s from './Greeting.module.scss';
import ReactTypingEffect from 'react-typing-effect';

export const Greeting = () => {


    return (
        <div  className={`${s.greateTitle} ${s.container}`}>


                <div className={s.text}>

                    <h1>I'm Svetlana Shunkova</h1>
                    <ReactTypingEffect
                        text={["front-end developer"]}
                    />
                </div>

        </div>
    );
};

