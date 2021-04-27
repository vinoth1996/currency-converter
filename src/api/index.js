import axios from 'axios';

const url = "https://api.coindesk.com/v1/bpi";

export const getCurrencies = () => axios.get(`${url}/currentprice.json`);
export const getHistoricalPrice = (currency, start, end) => axios.get(`${url}/historical/close.json?currency=${currency}&start=${start}&end=${end}`); 