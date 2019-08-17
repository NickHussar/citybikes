import {all, fork} from 'redux-saga/effects';
import networkSagas from './networks/sagas';
import stationSagas from './stations/sagas';

export default function* rootSaga() {
    yield all([
      fork(networkSagas),
      fork(stationSagas),
    ])
  }
  