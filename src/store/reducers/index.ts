import {combineReducers} from "redux";
import {CurrencyReducer} from "./currencyReducer";
import {trackCurrencyReducer} from "./trackCurrencyReducer";
import {NeedCurrenciesReducer} from "./needCurrencies";


export const rootReducer = combineReducers({
    currency: CurrencyReducer,
    trackCurrency: trackCurrencyReducer,
    needCurrencies: NeedCurrenciesReducer,
})

export type RootState = ReturnType<typeof rootReducer>