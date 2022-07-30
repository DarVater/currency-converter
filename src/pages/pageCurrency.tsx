import React from 'react';
import CurrencyStatus from "../components/CurrencyStatus/CurrencyStatus";
import CurrencyConverter from "../components/CurrencyConverter/CurrencyConverter";

const PageCurrency = () => {
    return (
        <div>
            <CurrencyStatus/>
            <CurrencyConverter/>
        </div>
    );
};

export default PageCurrency;