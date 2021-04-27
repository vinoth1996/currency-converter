import { FETCH_CURRENCY, FETCH_BITCOIN_DATA } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getCurrency = () => async (dispatch) => {
    try {
        const {data} = await api.getCurrencies();
        dispatch({ type: FETCH_CURRENCY, payload: data.bpi });
    } catch (error) {
        console.log(error.message);
    }
}

export const getBitCoinData = (currency, start, end) => async (dispatch) => {
    try {
        const {data} = await api.getHistoricalPrice(currency, start, end);

        dispatch({ type: FETCH_BITCOIN_DATA, payload: data.bpi });
    } catch (error) {
        console.log(error.message);
    }
}