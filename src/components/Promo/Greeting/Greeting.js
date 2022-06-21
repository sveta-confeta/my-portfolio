import React from 'react';
import s from './Greeting.module.scss';

export const Greeting = () => {


    return (
        <div  className={`${s.greateTitle} ${s.container}`}>


                <div className={s.text}>

                    <h1>I'm Svetlana Shunkova</h1>
                    <h2 className={s.title}>front-end developer | web developer</h2>
                </div>


            {/*<div className={s.foto}>*/}

            {/*</div>*/}

        </div>
    );
};

