import React from 'react';
import s from './Footer.module.scss'
import {Title} from "../Common/Title/Title";

export const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <div className={s.container}>
                <Title title={'Shunkova Svetlana'}/>
                <div className={s.iconGroup}>
                    <a href={"https://github.com/sveta-confeta"}>
                        <div className={s.iconGit}>

                        </div>
                    </a>
                    <a href={"https://www.linkedin.com/in/shunkova-svetlana/"}>
                        <div className={s.iconLink}>

                        </div>
                    </a>
                    <a href={"https://www.codewars.com/users/sveta-confeta"}>
                        <div className={s.iconCodevars}>

                        </div>
                    </a>
                    <a href={'https://t.me/SvetlanaShuncova'}>
                        <div className={s.iconTeleg}>

                        </div>
                    </a>
                </div>
                <div className={s.footerText}>2022 Все права защищены</div>
            </div>
        </div>
    );
};

