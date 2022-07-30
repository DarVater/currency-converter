import React from 'react';
import CurrencyStatus from "../../components/CurrencyStatus/CurrencyStatus";
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <CurrencyStatus/>
        </div>
    );
};

export default Header;