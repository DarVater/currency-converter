import {CurrencyAction, CurrencyActionTypes} from "../types/currency";
import {Dispatch} from "redux";
import axios from "axios";

export const FetchCurrencyAPI = () => {
    return  async (dispatch: Dispatch<CurrencyAction>) => {
        try {
            dispatch({type: CurrencyActionTypes.FETCH_CURRENCY})
            const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
            const response =  await  axios.get(url)
            dispatch({type:CurrencyActionTypes.FETCH_CURRENCY_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: CurrencyActionTypes.FETCH_CURRENCY_ERROR,
                payload: 'Произошла ошибка  при загрузке пользователей'
            })
        }
    }
}
