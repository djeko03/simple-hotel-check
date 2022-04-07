import React from 'react';
import css from './index.module.css'

export const Input = ({
    className,
    label,
    placeholder,
    onChange,
    type = 'text'
               }) => {
    return (
        <div className={className}>
            <p className={css.label}>{label}</p>
            <input className={css.input} onChange={onChange} placeholder={placeholder} type={type}/>
        </div>
    );
};

