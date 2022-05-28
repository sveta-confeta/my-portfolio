import React from 'react';
import {Header} from "./Header/Header";
import {Greeting} from "./Greeting/Greeting";
import {Helmet} from "react-helmet";
import s from './Promo.module.css'

export const Promo = () => {
    return (

        <div className={`${s.infoMain} `}>
            <Header/>
            <Helmet>
                <script src="http://atuin.ru/js/art/stars.js" type="text/javascript"></script>
            </Helmet>

            <canvas id="stars">
            </canvas>

            <Greeting/>
        </div>
    );
};

