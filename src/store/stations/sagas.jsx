import {call, put, takeLatest} from 'redux-saga/effects';

import {GET_STATIONS_SAGA} from './constants';
import {setStations} from './actions';

import {requestStations} from '../../api';

function* fetchStationSaga(action) {
    try {
        yield console.log('sos');
    } catch(error) {
        console.log(error);
    }
};

function* stationSagas() {
    yield takeLatest(GET_STATIONS_SAGA, fetchStationSaga);
}

export default stationSagas;
