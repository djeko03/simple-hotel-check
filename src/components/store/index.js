import {createStore, combineReducers, applyMiddleware} from "redux";
import {carouselReducer} from "./carouselReducer";
import {hotelReducer} from "./hotelReducer";
import {basketReducer} from "./basketReducer";
import createSagaMiddleware from 'redux-saga'
import {hotelsWatcher} from "../../saga/hotelsSaga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    carousel: carouselReducer,
    hotel: hotelReducer,
    basket: basketReducer,
})


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(hotelsWatcher)