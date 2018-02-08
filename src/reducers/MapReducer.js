import { GET_CURRENT_LOCATION, GET_INPUT, TOOGLE_SEARCH_RESULT, GET_ADDRESS_PREDICTIONS } from '../actions/types';
import {Dimensions} from 'react-native';
const INITIAL_STATE = { region: {}, inputData:{}, resultTypes: {}, predictions:{}};
const {width, height} = Dimensions.get("window");
const ASPECT_RATION = width / height;
const LATITUDEDELTA = 0.0922;
const LONGTITUDEDELTA = ASPECT_RATION * LATITUDEDELTA;


export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type){
        case GET_CURRENT_LOCATION:
            return {...state, region: {
                latitude: action.payload.coords.latitude,
                longitude: action.payload.coords.longitude,
                latitudeDelta: LATITUDEDELTA,
                longitudeDelta: LONGTITUDEDELTA
                }
             };
        case GET_INPUT:
            return {...state, inputData: { [action.payload.key]: action.payload.value
                }
            };
        case TOOGLE_SEARCH_RESULT:{
            if(action.payload.key ==='pickUp'){
                return {...state, resultTypes: {pickUp: true, dropOff: false}, predictions:{}};
            } else{
                return {...state, resultTypes: {pickUp: false, dropOff: true}, predictions:{}};
            }
            
        }
        case GET_ADDRESS_PREDICTIONS:
            return {...state, predictions: action.payload}
        default:
            return state;
    }
}