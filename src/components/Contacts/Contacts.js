import React from 'react';
import s from './Contacts.module.scss'
import {Title} from "../Common/Title/Title";
import {useFormik} from "formik";

const Contacts = (props) => {

    const formik = useFormik({
        initialValues: {
            username: '',
            number: '',
            messages:'',


        },
        onSubmit: values => {
            // dispatch(setRegistrTC(values));
            alert(JSON.stringify(values));
            formik.resetForm();
        },
    })
    return (
        <div className={s.contact} id={'contacts'}>
            <div className={s.contactWrapper}>
                <Title title={'contacts'}/>
                <form className={s.form} onSubmit={formik.handleSubmit}>
                    <fieldset>
                        <input type="text" id='username' className={s.text} placeholder={'ФИO'} autoFocus
                               {...formik.getFieldProps('username')}/>
                        <input className={s.tel}  id='number' type={'number'} placeholder={'номер телефона'}
                               {...formik.getFieldProps('number')}/>
                        <textarea  id=' messages' className={s.textarea}
                                   {...formik.getFieldProps('messages')}/>
                    </fieldset>
                    <button type={'submit'} className={s.btn}>Send me</button>
                </form>
            </div>
        </div>
    )

};

export default Contacts;

