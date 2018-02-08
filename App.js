/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TabBarIOS,
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';
import {Header, Container, Body, Title} from 'native-base';
import PlaceMap from './src/PlaceMap';
import AddPlace from './src/AddPlace';
import MapView from 'react-native-maps';
import Home from './src/components/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers' ;

export default class YourApp extends Component<{}> {
  
  
  render(){
    const store = createStore(reducers,{}, applyMiddleware(ReduxThunk))
    return(
      
      <Provider store={store}>
        <Home />
      </Provider>
      
        
    );
  }

}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 50,
  },
  view: {
    backgroundColor: '#fed',
    flex: 1
  },
    map: {
      ...StyleSheet.absoluteFillObject,
    }
});

