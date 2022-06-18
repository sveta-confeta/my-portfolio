import React from 'react';
import s from './Contacts.module.css'
import {Title} from "../ForAll/Title/Title";

const Contacts = (props) => {
    return (
        <div className={s.contact}>
            <div className={s.contactWrapper}>
                <Title title={'contacts'}/>
                <form className={s.form}>
                    <fieldset>

                        <input className={s.text} placeholder={'ФИO'} autoFocus/>
                        <input className={s.tel} type={'number'} placeholder={'номер телефона'}/>
                        <textarea className={s.textarea}/>
                    </fieldset>
                    <button className={s.btn}>Send me</button>
                </form>
            </div>
        </div>
    )

};

export default Contacts;

// <div className="form">

//     <div className="input-container ic1">
//         <input id="firstname" className="input" type="text" placeholder=" "/>
//         <div className="cut"></div>
//         <label htmlFor="firstname" className="placeholder">First name</label>
//     </div>
//     <div className="input-container ic2">
//         <input id="lastname" className="input" type="text" placeholder=" "/>
//         <div className="cut"></div>
//         <label htmlFor="lastname" className="placeholder">Last name</label>
//     </div>
//     <div className="input-container ic2">
//         <input id="email" className="input" type="text" placeholder=" "/>
//         <div className="cut cut-short"></div>
//         <label htmlFor="email" className="placeholder">Email</>
//     </div>
//     <button type="text" className="submit">submit</button>
//</div>