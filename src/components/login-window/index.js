import React from 'react';
import css from './index.module.css'
import {Input} from "../input";
import {Button} from "../button";

export const LogInWindow = () => {
    return (
        <div className={css.content}>
            <h1 className={css.title}>Simple Hotel Check</h1>
            <Input className={css.input} label={'Логин'}/>
            <Input type='password' className={css.input} label={'Пароль'}/>
            <Button className={css.button}>Войти</Button>
        </div>
    );
};

