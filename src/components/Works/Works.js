import React from 'react';
import Work from "./Work";
import s from './Works.module.css'

const Works = () => {
    return (
        <div className={s.workWrapper}>
            <h2>Мои проекты</h2>
            <div className={s.wrapper}>
                <Work title={'Todolist'} description={'описание проекта "Todolist"'}/>
                <Work title={'Social network'}  description={'описание проекта "Social network"'}/>
                <Work title={'Counter'}  description={'описание проекта "Counter" "Counter'}/>
                <Work title={'Leding page'}  description={'описание проекта "Leding page"'}/>
            </div>
        </div>
    );
};

export default Works;