import {NeedCurrenciesAction, NeedCurrenciesState, NeedCurrenciesActionTypes} from "../../types/needCurrencies";

const initialState: NeedCurrenciesState = {
    needCurrencies: ['EUR', 'USD', 'UAH'],
}

export const NeedCurrenciesReducer = (state= initialState, action: NeedCurrenciesAction) => {
    switch (action.type){
        case NeedCurrenciesActionTypes.SET_NEED_CURRENCIES:
            return  {...state, loading: false, trackCurrency: action.payload}
        default:
            return state
    }
}
