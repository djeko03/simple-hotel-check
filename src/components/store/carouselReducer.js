
const defaultState = {
    images: [
        {id: 1, url: 'img/carousel/lake.jpg'},
        {id: 2, url: 'img/carousel/forest.jpg'},
        {id: 3, url: 'img/carousel/road.jpg'},
        {id: 4, url: 'img/carousel/lake.jpg'},
        {id: 5, url: 'img/carousel/forest.jpg'},
        {id: 6, url: 'img/carousel/road.jpg'},
        {id: 7, url: 'img/carousel/lake.jpg'},
        {id: 8, url: 'img/carousel/forest.jpg'},
    ]
}

export const carouselReducer = (state = defaultState, action) => {
    switch (action.type) {

        default: return state
    }
}