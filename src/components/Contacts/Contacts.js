import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.contactWrapper}>
            <h2>Контакты</h2>
            <form className={s.form}>
            <fieldset>

                    <input className={s.text} placeholder={'ФИO'} autoFocus/>
                    <input className={s.tel} type={'number'} placeholder={'номер телефона'}/>
                    <textarea className={s.textarea}/>
            </fieldset>
            <button className={s.btn}>Отправить</button>
        </form>

</div>
)
    ;
};

export default Contacts;