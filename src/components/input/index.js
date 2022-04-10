import React from 'react';
import css from './index.module.css'

export const Input = ({
    className,
    label,
    placeholder,
    onChange,
    value,
    type = 'text',
    min,
    max,
    pattern,
    ref
               }) => {
    return (
        <div className={className}>
            <p className={css.label}>{label}</p>
            <input ref={ref} pattern={pattern} min={min} max={max} className={css.input} onChange={onChange} placeholder={placeholder} type={type} value={value}/>
        </div>
    );
};

