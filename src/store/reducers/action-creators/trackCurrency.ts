
import {TrackCurrencyAction, TrackCurrencyActionTypes} from "../../../types/trackCurrency";

export function  setTrackCurrency(trackCurrency: object): TrackCurrencyAction {
    return {type: TrackCurrencyActionTypes.SET_TRACK_CURRENCY, payload: trackCurrency}
}