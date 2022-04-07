import React from 'react';
import css from './index.module.css'
import {Modal} from "../modal";
import {LogInWindow} from "../login-window";

export const LoginPage = () => {
    return (
        <div className={css.login}>
            <div className={css.container}>
                <img className={css.image} src="/img/login-page.jpg" alt=""/>
                <div className={css.blur}></div>
                <Modal>
                    <LogInWindow/>
                </Modal>
            </div>
        </div>
    );
};

