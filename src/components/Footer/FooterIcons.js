import React from 'react';
import s from './Footer.module.scss'

export const FooterIcons = () => {
    return (
        <div className={s.iconGroup}>
            <a href={"https://github.com/sveta-confeta"}
               rel="noreferrer noopener"
               title="github"
               target="_blank"
               aria-label="github link"
            >
                <div className={s.iconGit}></div>
            </a>
            <a
                href={"https://www.linkedin.com/in/shunkova-svetlana/"}
                rel="noreferrer noopener"
                title="linkedin"
                target="_blank"
                aria-label="linkedin link"
            >
                <div className={s.iconLink}></div>
            </a>
            <a href={"https://www.codewars.com/users/sveta-confeta"}
               rel="noreferrer noopener"
               title="codewars"
               target="_blank"
               aria-label="codewars link"
            >
                <div className={s.iconCodevars}></div>
            </a>
            <a href={'https://t.me/SvetlanaShuncova'}
               rel="noreferrer noopener"
               title="telegram"
               target="_blank"
               aria-label="telegram link"
            >
                <div className={s.iconTeleg}></div>
            </a>
        </div>
    );
};

