import {combineReducers} from "redux";
import {CurrencyReducer} from "./currencyReducer";
import {trackCurrencyReducer} from "./trackCurrencyReducer";

export const rootReducer = combineReducers({
    currency: CurrencyReducer,
    trackCurrency: trackCurrencyReducer,
})

export type RootState = ReturnType<typeof rootReducer>