import React, {useEffect, useState} from 'react';
import css from './index.module.css'
import {ExitButton} from "../exit-button";
import {Input} from "../input";
import {Button} from "../button";
import {Hotel} from "../hotel";
import cn from 'classnames';
import {Carousel} from "../carousel";
import {useDispatch, useSelector} from "react-redux";
import {addHotelAction, fetchHotelsAction} from "../store/hotelReducer";
import axios from "axios";
import {sortRatingAscendingAction, sortRatingDescendingAction} from "../store/basketReducer";

export const HomePage = () => {

    const [date, setDate] = useState('2022-04-10')
    const [days, setDays] = useState(1)
    const [location, setLocation] = useState('Москва')

    const dispatch = useDispatch()
    const hotelsState = useSelector(state => state.hotel.hotels)
    const basketState = useSelector(state => state.basket.basket)

    useEffect(() => {
        dispatch(fetchHotelsAction())
    }, [])


    const handleSearch = () => {
        axios.get(`http://engine.hotellook.com/api/v2/lookup.json?query=${location}&lang=ru&lookFor=both&limit=10`)
            .then(res => {
                dispatch(addHotelAction(res.data.results.hotels))
            })
    }

    const [ratingValue, setRatingValue] = useState('Рейтинг')

    const handleSortRatingAscending = (e) => {
        setRatingValue(e.target.value)
        if(e.target.value === 'Ascending') {
            dispatch(sortRatingAscendingAction())
        }
        else {
            dispatch(sortRatingDescendingAction())
        }
    }


    return (
        <main className={css.home}>
            <header className={css.header}>
                <h1 className={css.title}>Simple Hotel Check</h1>
                <ExitButton/>
            </header>
            <section className={css.content}>
                <div className={css.navigation}>
                    <div className={cn(css.search, css.default)}>
                        <Input value={location} onChange={e => {
                            setLocation(e.target.value)
                        }} label='Локация'/>
                        <Input value={date} onChange={e => setDate(e.target.value)} type='date' min='2021-04-14' max='2022-04-29' label='Дата заселения'/>
                        <Input value={days} onChange={e => setDays(e.target.value)} label='Количество дней'/>
                        <Button className={css.button} onClick={handleSearch}>Найти</Button>
                    </div>
                    <div className={cn(css.favorites, css.default)}>
                        <p className={css.favoritesTitle}>Избранное</p>
                            <select onChange={handleSortRatingAscending} name="rating" className={css.select} defaultValue={ratingValue}>
                                <option disabled>Рейтинг</option>
                                <option value='Ascending'>Возрастание</option>
                                <option value='Descending'>Убывание</option>
                            </select>
                            <select name="price" className={css.select} defaultValue='Цена'>
                                <option disabled>Цена</option>
                                <option value='Ascending'>Дороже</option>
                                <option value='Descending'>Дешевле</option>
                            </select>
                        <div className={css.favoritesHotels}>
                            {basketState ?
                                basketState.map(hotel => <Hotel hotel={hotel} isActive={true} key={hotel.id} date={date} name={hotel.label}/>)
                                : ''
                            }
                        </div>
                    </div>
                </div>

                <div className={cn(css.default ,css.hotels)}>
                    <div className={css.hotelsText}>
                        <div className={css.hotelsCity}>
                            <p className={css.largeText}>Отели</p>
                            <span className={css.separator}><img src="img/arrow.png" alt=''/></span>
                            <p className={css.largeText}>{hotelsState > 0 ? hotelsState[0].locationName.split(',')[0] : 'Москва'}</p>
                        </div>
                        <p className={css.hotelsDate}>{date}</p>
                    </div>

                    <Carousel/>

                    <p className={css.favoritesCount}>Добавлено в Избранное: <span className={css.favoritesLength}>{basketState.length}</span> отеля</p>

                    <div className={css.hotelsContainer}>
                        {hotelsState.length > 0 ?
                            hotelsState.map(hotel => <Hotel isActive={false} hotel={hotel} key={hotel.id} date={date} name={hotel.label} withIcon={true}/>)

                            : <div>Отели отсутсвуют</div>
                        }
                    </div>
                </div>

            </section>
        </main>
    );
};

