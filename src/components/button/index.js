import React from 'react';
import css from './index.module.css'
import cn from 'classnames'

export const Button = ({
    children,
    className,
                }) => {
    return (
        <button className={cn(css.Button ,className)}>
            {children}
        </button>
    );
};

