export const getCurrentNetwork = (state) => {
    if (state.networks.currentNetworkId) {
        return state.networks.loadedNetworks[state.networks.currentNetworkId];
    } else {
        return {};
    }
};
