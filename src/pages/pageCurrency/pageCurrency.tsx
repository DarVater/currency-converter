import React from 'react';
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
import './pageCurrency.css'
import Header from "../../components/header/header";

const PageCurrency = () => {
    return (
        <div className="wrapper">
            <div className="convertor__container _container">
                <Header/>
                <CurrencyConverter/>
            </div>
        </div>
    );
};

export default PageCurrency;