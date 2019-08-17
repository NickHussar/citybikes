import * as constants from './constants';

export const requestNetworks = () => ({type: constants.GET_NETWORKS_SAGA});

export const setNetworks = (payload) => ({type: constants.SET_NETWORKS, payload});

export const selectNetwork = (payload) => (
  {type: constants.SELECT_NETWORK_SAGA, payload}
);

export const setCurrentNetworkId = (id) => (
  {type: constants.SET_CURRENT_NETWORK_ID, id}
);

export const rememberNetwork = (payload) => (
  {type: constants.REMEMBER_NETWORK, payload}
);
