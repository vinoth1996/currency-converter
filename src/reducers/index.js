import { FETCH_CURRENCY, FETCH_BITCOIN_DATA } from '../constants/actionTypes';

const initialState = {
  currencies: [],
  historicalData: []
}

export const reducers = (data = initialState, action) => {
    switch (action.type) {
      case FETCH_CURRENCY:
        data.currencies = action.payload;
        return {...data};
      case FETCH_BITCOIN_DATA:
        data.historicalData = action.payload;
        return {...data};
      default:
        return data;
    }
};