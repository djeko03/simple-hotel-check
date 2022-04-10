

const defaultState = {
    basket: []
}

const ADD_BASKET = "ADD_BASKET";
const REMOVE_BASKET = "REMOVE_BASKET"
const SORT_RATING_ASCENDING = "SORT_RATING_ASCENDING"
const SORT_RATING_DESCENDING = "SORT_RATING_DESCENDING"

export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_BASKET:
            return {...state, basket: [...state.basket, action.payload]}
        case REMOVE_BASKET:
            return {...state, basket: state.basket.filter(hotel => hotel.id !== action.payload)}
        case SORT_RATING_ASCENDING:
            return {...state, basket: state.basket.sort()}
        case SORT_RATING_DESCENDING:
            return {...state, basket: state.basket.sort().reverse()}


        default: return state
    }
}


export const addBasketAction = (payload) => ({type: ADD_BASKET, payload})
export const removeBasketAction = (payload) => ({type: REMOVE_BASKET, payload})
export const sortRatingAscendingAction = () => ({type: SORT_RATING_ASCENDING})
export const sortRatingDescendingAction = () => ({type: SORT_RATING_DESCENDING})