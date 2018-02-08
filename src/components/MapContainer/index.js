import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './MapContainerStyle';
import SearchBox from '../SearchBox';
import SearchResult from '../SearchResults';

export const MapContainer =({region, getInputData, toogleSearchResult, getAddressPredictions, resultTypes, predictions, inputData}) => {
    return(
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
            >
            <MapView.Marker 
                coordinate={region}
                pinColor='red'/>
            </MapView>
            <SearchBox getInputData={getInputData} 
                toogleSearchResult={toogleSearchResult} 
                getAddressPredictions={getAddressPredictions} 
                inputData={inputData}
                resultTypes={resultTypes}/>
            {   (resultTypes.pickUp || resultTypes.dropOff) &&
                <SearchResult predictions={predictions}/>
            }
        </View> 
    );
}

export default MapContainer;