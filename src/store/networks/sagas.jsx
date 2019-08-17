import {call, put, takeLatest} from 'redux-saga/effects';

import {GET_NETWORKS_SAGA, SELECT_NETWORK_SAGA} from './constants';
import {
    setNetworks,
    setCurrentNetworkId,
    rememberNetwork,
    selectNetwork,
} from './actions';

import {requestNetworks, requestNetwork} from '../../api';

function* selectNetworkSaga(action) {
    try {
        const id = action.payload;
        const networkRequest = yield call(requestNetwork, id);
        yield put(rememberNetwork({
            id,
            data: networkRequest.data.network,
        }));
        yield put(setCurrentNetworkId(id));
    } catch (error) {
        console.log(error);
    }
}

function* fetchNetworkSaga(action) {
    console.log(action);
    try {
        const request = yield call(requestNetworks);
        const response = request.data.networks; 
        yield put(setNetworks(response));
        if (response.length) {
            const id = response[0].id;
            yield put(selectNetwork(id));
        }

    } catch(error) {
        console.log(error);
    }
};

function* networkSagas() {
    yield takeLatest(GET_NETWORKS_SAGA, fetchNetworkSaga);
    yield takeLatest(SELECT_NETWORK_SAGA, selectNetworkSaga)
}

export default networkSagas;
