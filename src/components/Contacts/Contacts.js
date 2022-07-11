import React from 'react';
import s from './Contacts.module.scss'
import {Title} from "../Common/Title/Title";

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

