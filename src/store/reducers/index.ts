import {combineReducers} from "redux";
import {CurrencyReducer} from "./currencyReducer";

export const rootReducer = combineReducers({
    user: CurrencyReducer
})