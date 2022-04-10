import React, {useEffect, useState} from 'react';
import css from './index.module.css'
import {Input} from "../input";
import {Button} from "../button";

export const LogInWindow = () => {
    const [loginValue, setLoginValue] = useState('')
    const [loginError, setLoginError] = useState('')
    const [passValue, setPassValue] = useState('')
    const [passError, setPassError] = useState('')

    useEffect(() => {
        if (localStorage.getItem('login') && localStorage.getItem('pass')){
            window.location.href = '/home'
        }
    }, [])


    const handleLogIn = () => {
        setLoginError('')
        setPassError('')
        if(loginValue.length < 5 || loginValue.includes('@') === false) {
            setLoginError('Логин не должен быть короче 5 символов и содержать @')
        } else if (passValue.length < 5 || passValue.length > 10) {
            setPassError('Пароль должен быть длиннее 5 символов и короче 10')
        } else {
            window.location.href = '/home'
            localStorage.setItem('login', `${loginValue}`)
            localStorage.setItem('pass', `${passValue}`)
        }
    }

    return (
        <div className={css.content}>
            <h1 className={css.title}>Simple Hotel Check</h1>
            <Input className={css.input} label={'Логин'} value={loginValue} onChange={e => setLoginValue(e.target.value)} type='email'/>
            <span className={css.error}>{loginError}</span>
            <Input value={passValue} onChange={e => setPassValue(e.target.value)} type='password' className={css.input} label={'Пароль'}/>
            <span className={css.error}>{passError}</span>
            <Button className={css.button} onClick={handleLogIn}>Войти</Button>
        </div>
    );
};

