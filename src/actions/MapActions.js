import {GET_CURRENT_LOCATION, 
    GET_INPUT, 
    TOOGLE_SEARCH_RESULT,
    GET_ADDRESS_PREDICTIONS
} from './types';
import reducers from '../reducers';

import RNGooglePlaces from 'react-native-google-places';

export const getCurrentLocation = () => {
    return(dispatch) => {
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                dispatch({
                    type: GET_CURRENT_LOCATION,
                    payload: position
                });
            },
            (error) => console.log(error.message),
            {enableHighAccurancy: true, timeout: 20000, maximumAge: 1000}
        )
    }
}

export const getInputData = (text) => {
    return{
        type: GET_INPUT,
        payload: text
    }
}

export const toogleSearchResult = (text) => {
    return{
        type: TOOGLE_SEARCH_RESULT,
        payload: text
    }
}
export const getAddressPredictions = (text) =>{
    return (dispatch) => {
        // let userInput = store().map.resultTypes.pickUp ? store().map.inputData.pickUp : store().map.inputData.dropOff;
        // let userInput = text;
        // let userInput = !resultTypes.pickUp ? inputData.pickUp.value : inputData.dropOff.value;
        console.log(text);
        RNGooglePlaces.getAutocompletePredictions(text,
            {
                city:'Danang',
                country: 'VN'
            }
        ).then((results) => dispatch({
            type: GET_ADDRESS_PREDICTIONS,
            payload: results
        }))
        .catch((error) => console.log(error.message));
       
    };
}
