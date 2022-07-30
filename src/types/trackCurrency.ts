export interface TrackCurrencyState {
    trackCurrency: any[];
    loading: boolean;
    error: null | string;
}
export enum  TrackCurrencyActionTypes{
    SET_TRACK_CURRENCY = 'SET_TRACK_CURRENCY',
}
interface  SetTrackCurrency{
    type: TrackCurrencyActionTypes.SET_TRACK_CURRENCY;
    payload: Object;
}

export type TrackCurrencyAction =  SetTrackCurrency