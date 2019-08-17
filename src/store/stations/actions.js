import * as constants from './constants';

export const requestStations = () => ({type: constants.GET_STATIONS_SAGA});

export const setStations = (payload) => ({
    type: constants.SET_STATIONS,
    payload: payload,
});