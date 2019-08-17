import * as constants from './constants';

const initialState = {
  stationsList: [],
}

export const stationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_STATIONS:
      return {
        ...state,
        stationsList: action.payload
      }
    default:
      return state
  }
}
