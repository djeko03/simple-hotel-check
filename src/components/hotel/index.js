import React, {useState} from 'react';
import css from './index.module.css';
import StarsRating from 'stars-rating'
import cn from 'classnames';
import Like from "react-heart"
import {useDispatch} from "react-redux";
import {addBasketAction, removeBasketAction} from "../store/basketReducer";


export const Hotel = ({
    className,
    withIcon = false,
    name ,
    date,
    hotel,
    isActive = false
                               }) => {

    const [active, setActive] = useState(isActive)
    const dispatch = useDispatch()
    const addBasket = (hotel) => {
        dispatch(addBasketAction(hotel))
    }
    const removeBasket = () => {
        dispatch(removeBasketAction(hotel.id))
    }


    const handleActive = () => {
        setActive(!active)
        if (!active) {
            addBasket(hotel)
        } else {
            removeBasket()
        }
    }

    return (
        <div className={cn(className, css.container)}>
            <div className={css.content}>
                <div className={css.first}>
                    {withIcon ? <div className={css.icon}><img src="/img/hotel.png" alt=""/></div> : ' '}

                    <div>
                        <p className={css.name}>{name}</p>
                        <div className={css.dates}>
                            <p>{date}</p>
                            <div className={css.separator}><span></span></div>
                            <p>1 день</p>
                        </div>

                        <StarsRating
                            count={5}
                            size={20}
                            value={3}
                            color1={'#6C6845'}
                            color2={'#CDBC1E'}
                        />
                    </div>
                </div>
                <div className={css.second}>
                    <div style={{width:'18px'}}>
                        <Like
                            activeColor={'#E55858'}
                            isActive={active}
                            onClick={handleActive}
                        />
                    </div>
                    <div className={css.prices}>
                        <p className={css.priceName}>Price:</p>
                        <p className={css.price}>23 924 ₽</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

