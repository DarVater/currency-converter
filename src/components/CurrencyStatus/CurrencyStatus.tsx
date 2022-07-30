import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {FetchCurrencyAPI} from "../../APIs/fetchCurrencyAPI";
import {useDispatch} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {setTrackCurrency} from "../../store/reducers/action-creators/trackCurrency";
import './CurrencyStatus.css'

const CurrencyStatus = () => {
    const {needCurrencies} = useTypedSelector(state => state.needCurrencies)
    const {currency, loading, error} = useTypedSelector(state => state.currency)
    const {FetchCurrencyAPI} = useActions()

    const dispatch = useDispatch()

    useEffect(() => {
        FetchCurrencyAPI()
    }, [] )

    type tpCurrObject = {
        [key: string]: Number
    }
    let currObject: tpCurrObject = {}

    useEffect(() => {
        dispatch(setTrackCurrency(currObject))
    }, [currObject])

    if (loading) {
        return  <h1>Идет загрузка...</h1>
    }
    if (error) {
        return  <h1>{error}</h1>
    }
    currency.forEach((element: any) => {
        if (needCurrencies.indexOf(element.cc) !== -1){
            currObject[element.cc] = element.rate
        }
    })
    currObject['UAH'] = 1

    return (
        <ul className="currency-now__items">
            {needCurrencies.map((curr) =>
                curr !== 'UAH'
                ? <li className="currency-now__item" key={curr}>{`${curr}: ${currObject[curr]}`}</li>
                : ''
            )}
        </ul>
    );
};

export default CurrencyStatus;