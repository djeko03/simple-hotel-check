

const defaultState = {
    hotels: []
}

const ADD_HOTEL = "ADD_HOTEL"
export const FETCH_HOTELS = "FETCH_HOTELS"

export const hotelReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_HOTEL:
            return {...state, hotels: action.payload}

        default: return state
    }
}

export const addHotelAction = payload => ({type: ADD_HOTEL, payload})
export const fetchHotelsAction = () => ({type: FETCH_HOTELS})

