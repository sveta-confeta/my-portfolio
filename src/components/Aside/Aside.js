import React from 'react';
import s from './Aside.module.css';

const Aside = () => {
    return (
        <div className={s.wrapperAside}>
            <div className={s.container}>
                <div className={s.telework}>
                    Look for  distant work  options <br/>
                    and relocation

                </div>

               <a href={'#'} className={s.btnLink} > Hire me</a>


            </div>
        </div>
    );
};

export default Aside;