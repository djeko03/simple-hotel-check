import React from 'react';
import css from './index.module.css'
import cn from 'classnames'

export const Button = ({
    children,
    className,
    onClick,
                }) => {
    return (
        <button onClick={onClick} className={cn(css.Button ,className)}>
            {children}
        </button>
    );
};

