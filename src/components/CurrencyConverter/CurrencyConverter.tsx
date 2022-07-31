import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './CurrencyConverter.css'

const CurrencyConverter = () => {
    const {needCurrencies} = useTypedSelector(state => state.needCurrencies)
    const {trackCurrency, loading, error} = useTypedSelector(state => state.trackCurrency)
    const [valueSide1, setValueSide1] = useState('')
    const [symbolSide1, setSymbolSide1] = useState('UAH')
    const [valueSide2, setValueSide2] = useState('')
    const [symbolSide2, setSymbolSide2] = useState('UAH')

    useEffect(() => {
        let uahCount = parseCount(valueSide1, symbolSide1)
        setValueSide2(unParseCount(uahCount, symbolSide2))
    }, [valueSide1, symbolSide1])

    useEffect(() => {
        let uahCount = parseCount(valueSide2, symbolSide2)
        debounceUnParseCount(uahCount, symbolSide1)
    }, [valueSide2, symbolSide2])
    let timer: ReturnType<typeof setTimeout>

    const  debounceUnParseCount = useCallback((value: number, symbol: string) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout( () => {
            let outCount = Number(value)/trackCurrency[symbol];
            setValueSide1(String(outCount.toFixed(2)))
        }, 500)
    },[])

    const parseCount = (value: string, symbol: string)  => {
        let uahCount = Number(value)
        if (symbol !== 'UAH'){
            uahCount = Number(value)*Number(trackCurrency[symbol])
        }
        return uahCount
    }
    const unParseCount = (value: number, symbol: string)  => {
        let outCount = Number(value)/trackCurrency[symbol];

        return String(outCount.toFixed(2))
    }

    const selectSymbol1 = useRef(null);
    const selectSymbol2 = useRef(null);

    if (loading) {
        return  <h1>Идет загрузка...</h1>
    }
    if (error) {
        return  <h1>{error}</h1>
    }

    return (
        <div className="convertor">
            <div className="convertor__side side">
                <input
                    value={String(valueSide1)}
                    onChange={e => setValueSide1(e.target.value)}
                    className="side__amount"
                    type="number"
                    name="side1"
                    placeholder="enter amount..."
                />
                <select
                    ref={selectSymbol1}
                    className="side__select-symbol"
                    onChange={event => setSymbolSide1(event.target.value)}
                >
                    <option defaultValue={"true"} value="UAH">{"UAH"}</option>
                    {needCurrencies.map((curr) =>
                        curr !== 'UAH'
                        ? <option
                            value={curr}
                            className="side__symbol"
                            key={curr}
                        >
                            {curr}
                        </option>
                        : ''
                    )}
                </select>
            </div>
            <div className="convertor__side side">
                <input
                    value={String(valueSide2)}
                    onChange={e => setValueSide2(e.target.value)}
                    className="side__amount"
                    type="number"
                    name="side1"
                    placeholder="enter amount..."
                />
                <select
                    ref={selectSymbol2}
                    className="side__select-symbol"
                    onChange={event => setSymbolSide2(event.target.value)}
                >
                    <option defaultValue={"true"} value="UAH">{"UAH"}</option>
                    {needCurrencies.map((curr) =>
                        curr !== 'UAH'
                        ?
                            <option
                                value={curr}
                                className="side__symbol"
                                key={curr}
                            >
                                {curr}
                            </option>
                        : ''
                    )}
                </select>
            </div>
        </div>
    );
};

export default CurrencyConverter;