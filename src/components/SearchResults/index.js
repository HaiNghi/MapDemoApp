import React, {Component} from 'react';
import {Text} from 'react-native';
import {View, Left, InputGroup, Input, Icon, List, ListItem, Body} from 'native-base';
import {connect} from 'react-redux';
import styles from './SearchResultStyle';

export const SearchResult = ({predictions}) => {
    return(
        <View style={styles.searchResultsWrapper}>
            <List
                dataArray={predictions}
                renderRow={(item) => 
                    <View>
                        <ListItem button avatar>
                            <Left style={styles.leftContainer}>
                                <Icon name="md-navigate" style={styles.leftIcon} />
                            </Left>
                            <Body>
                                <Text style={styles.primaryText}>{item.primaryText}</Text>
                                <Text style={styles.secondaryText}>{item.secondaryText}</Text>
                            </Body>
                        </ListItem>
                    </View>
                }
            />
        </View>
    );
}

export default SearchResult;