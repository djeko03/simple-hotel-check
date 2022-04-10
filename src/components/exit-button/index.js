import React from 'react';
import css from './index.module.css'

export const ExitButton = () => {

    const handleExit = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('pass')
        window.location.href = '/'
    }

    return (
        <div className={css.container}>
            <button onClick={handleExit} className={css.button}>Выйти</button>
            <img src="/img/exit.png" alt=""/>
        </div>
    );
};

