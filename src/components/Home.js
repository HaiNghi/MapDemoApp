import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Header, Body, Title} from 'native-base';
import MapContainer from './MapContainer';
import HeaderComponents from './common/HeaderComponents';
import {connect} from 'react-redux';
import RNGooglePlaces from 'react-native-google-places';

import {
    getCurrentLocation, 
    getInputData, 
    toogleSearchResult,
    getAddressPredictions
} from '.././actions/MapActions';


class Home extends Component{
    componentDidMount(){
        this.props.getCurrentLocation();
    }

    render(){
        const region ={
            latitude: 16.052917401252717,
            longitude: 108.23642190935992,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
        return(
            <Container>
                {/* <Header style={{backgroundColor: '#ff5e3a'}} iosBarStyle="light-content">
                    <Body>
                        <Title>Maps</Title>
                    </Body>
                </Header> */}
                <HeaderComponents headerText="Maps"/>
                
                {this.props.region.latitude &&
                    <MapContainer region={this.props.region} 
                    getInputData={this.props.getInputData} 
                    toogleSearchResult={this.props.toogleSearchResult}
                    getAddressPredictions={this.props.getAddressPredictions}
                    resultTypes= {this.props.resultTypes}
                    predictions={this.props.predictions}
                    inputData={this.props.inputData}
                    />
                }
                
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        region: state.map.region,
        inputData: state.map.inputData || {},
        resultTypes: state.map.resultTypes || {},
        predictions: state.map.predictions || []
    }
}

export default connect(mapStateToProps,{getCurrentLocation, getInputData, toogleSearchResult, getAddressPredictions})(Home);