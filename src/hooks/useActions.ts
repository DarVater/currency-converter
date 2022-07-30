import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as CurrencyActionCreators from '../APIs/fetchCurrencyAPI'


export const  useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(CurrencyActionCreators, dispatch)
}
