
import {put, takeEvery, call} from 'redux-saga/effects'
import {addHotelAction, FETCH_HOTELS} from "../components/store/hotelReducer";

const fetchHotelsFromApi = (location) => fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=${location}&lang=ru&lookFor=both&limit=10`)

function* fetchHotelsWorker() {
    const data = yield call(fetchHotelsFromApi, 'moscow')
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(addHotelAction(json.results.hotels))
}

export function* hotelsWatcher() {
    yield takeEvery(FETCH_HOTELS, fetchHotelsWorker)
}

