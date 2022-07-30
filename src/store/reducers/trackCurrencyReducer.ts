import {TrackCurrencyAction, TrackCurrencyState, TrackCurrencyActionTypes} from "../../types/trackCurrency";

const initialState: TrackCurrencyState = {
    trackCurrency: [],
    error: null,
    loading: true
}

export const trackCurrencyReducer = (state= initialState, action: TrackCurrencyAction) => {
    switch (action.type){
        case TrackCurrencyActionTypes.SET_TRACK_CURRENCY:
            return  {...state, loading: false, trackCurrency: action.payload}
        default:
            return state
    }
}
