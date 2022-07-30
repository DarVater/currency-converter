export interface NeedCurrenciesState {
    needCurrencies: any[];
}
export enum  NeedCurrenciesActionTypes{
    SET_NEED_CURRENCIES = 'SET_NEED_CURRENCIES',
}
interface  SetNeedCurrencies{
    type: NeedCurrenciesActionTypes.SET_NEED_CURRENCIES;
    payload: Object;
}

export type NeedCurrenciesAction =  SetNeedCurrencies