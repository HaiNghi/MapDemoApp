import React, {Component} from 'react';
import {Text} from 'react-native';
import {View, InputGroup, Input, Icon} from 'native-base';
import {connect} from 'react-redux';
import styles from './SearchBoxStyles';

export const SearchBox = ({getInputData, toogleSearchResult, getAddressPredictions, resultTypes, inputData}) => {
    state:{input:''; input2:''};
    function handleInput(key,val){
        getInputData({
            key,
            value: val
        })
        // getAddressPredictions();
    }
    return(
        <View style={styles.searchBox}>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>PICK UP</Text>
                <InputGroup>
                    <Icon name = "search" size={15} color="#ff5e3a" />
                    <Input onFocus={()=>toogleSearchResult('pickUp')} style={styles.inputSearch} placeholder="Choose pick-up location" 
                    /* onChangeText={handleInput.bind(this,'pickUp')} */ 
                    onChangeText={(text=this.state.input)=>{
                        handleInput.bind(this,'pickUp');
                        getAddressPredictions(text);
                    }}
                    />
                </InputGroup>
            </View>
            <View style={styles.secondInputWrapper}>
                <Text style={styles.label}>DROP OFF</Text>
                <InputGroup>
                    <Icon name = "search" size={15} color="#ff5e3a" />
                    <Input onFocus={()=>toogleSearchResult('dropOff')} style={styles.inputSearch} placeholder="Choose drop-off location" 
                
                    onChangeText={(text=this.state.input)=>{
                        handleInput.bind(this,'dropOff');
                        getAddressPredictions(text);
                    }}/>
                </InputGroup>
            </View>
            
        </View>
    );
}

export default SearchBox;