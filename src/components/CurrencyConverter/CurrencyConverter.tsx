import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
const CurrencyConverter = () => {
    const {trackCurrency, loading, error} = useTypedSelector(state => state.trackCurrency)

    if (loading) {
        return  <h1>Идет загрузка...</h1>
    }
    if (error) {
        return  <h1>{error}</h1>
    }
    console.log(trackCurrency)
    return (
        <div className="convertor__container _container">

        </div>
    );
};

export default CurrencyConverter;