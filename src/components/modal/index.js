import React from 'react';
import {Portal} from "../portal";
import css from './index.module.css'

export const Modal = ({children}) => {
    return (
        <Portal>
            <div className={css.modal}>
                {children}
            </div>
        </Portal>
    );
};

