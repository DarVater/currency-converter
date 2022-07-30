import {CurrencyAction, CurrencyActionTypes, CurrencyState} from "../../types/currency";

const initialState: CurrencyState = {
    currency: [],
    loading: false,
    error: null,
}

export const CurrencyReducer = (state = initialState, action:CurrencyAction): CurrencyState => {
    switch (action.type) {
        case CurrencyActionTypes.FETCH_CURRENCY:
            return {loading: true, error: null, currency: []}
        case CurrencyActionTypes.FETCH_CURRENCY_SUCCESS:
            return {loading: false, error: null, currency: action.payload}
        case CurrencyActionTypes.FETCH_CURRENCY_ERROR:
            return {loading: false, error: action.payload, currency: []}
        default:
            return state
    }
}
