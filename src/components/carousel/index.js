import React, {useState} from 'react';
import css from './index.module.css'
import {useSelector} from "react-redux";
import cn from 'classnames'

export const Carousel = () => {

    const images = useSelector(state => state.carousel.images)


    const [imgPosition, setImgPosition] = useState(0)

    const handleSwitchLeft = () => {
        setImgPosition(imgPosition + 176)
        if (imgPosition === 0) {
            setImgPosition(0)
        }
    }
    const handleSwitchRight = () => {
        setImgPosition(imgPosition - 176)
    }


    return (
        <div className={css.carousel}>
            <button className={cn(css.button, css.left)} onClick={handleSwitchLeft}></button>
            <div className={css.container} style={{transform:`translateX(${String(imgPosition)}px)`}}>
                {images.map(image => <img key={image.id} className={css.image} src={image.url} alt=""/>)}
            </div>
            <button className={cn(css.button, css.right)} onClick={handleSwitchRight}></button>
        </div>
    );
};

