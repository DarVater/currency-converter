import {combineReducers} from "redux";
import {CurrencyReducer} from "./currencyReducer";

export const rootReducer = combineReducers({
    currency: CurrencyReducer
})

export type RootState = ReturnType<typeof rootReducer>