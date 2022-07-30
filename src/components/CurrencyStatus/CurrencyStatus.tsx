import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {FetchCurrencyAPI} from "../../APIs/fetchCurrencyAPI";
import {useDispatch} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {setTrackCurrency} from "../../store/reducers/action-creators/trackCurrency";

const CurrencyStatus = () => {
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
    const needCurrencies = ['EUR', 'USD'];
    currency.forEach((element: any) => {
        if (needCurrencies.indexOf(element.cc) !== -1){
            currObject[element.cc] = element.rate
        }
    })
    return (
        <div>
            {needCurrencies.map((curr) =>
                <h3 key={curr}>{`${curr}: ${currObject[curr]}`}</h3>
            )}
        </div>
    );
};

export default CurrencyStatus;