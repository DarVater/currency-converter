import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const CurrencyStatus = () => {
    const {currency, loading, error} = useTypedSelector(state => state.currency)

    return (
        <div>
            
        </div>
    );
};

export default CurrencyStatus;