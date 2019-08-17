import axios from 'axios';

export const requestNetworks = () =>
    axios.get('https://api.citybik.es/v2/networks/');

export const requestNetwork = (id) =>
    axios.get(`https://api.citybik.es/v2/networks/${id}`);
