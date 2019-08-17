import * as constants from './constants';

const initialState = {
  networksList: [],
  currentNetworkId: null,
  loadedNetworks: {},
}

export const networksReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_NETWORKS:
      return {
        ...state,
        networksList: action.payload,
      }

    case constants.SET_CURRENT_NETWORK_ID:
      return {
        ...state,
        currentNetworkId: action.id,
      }

    case constants.REMEMBER_NETWORK:
      return {
        ...state,
        loadedNetworks: {
          ...state.loadedNetworks,
          [action.payload.id]: action.payload.data,
        }
      }

    default:
      return state
    
  }
}

