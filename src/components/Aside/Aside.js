import React from 'react';
import s from './Aside.module.css';

const Aside = () => {
    return (
        <div className={s.wrapperAside} id="contacts">
            <div className={s.container}>
                <div className={s.telework}>
                    Look for  distant work  options <br/>
                    and relocation

                </div>

               <a href={'https://t.me/SvetlanaShuncova'}
                  target={'_blank'}
                  rel="noreferrer noopener"
                  className={s.btnLink}>
                   Hire me
               </a>
            </div>
        </div>
    );
};

export default Aside;