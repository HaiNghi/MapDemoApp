import React, {Component} from 'react';
import {Header,Body,Title, Left, Button, Icon, Right} from 'native-base';

class HeaderComponents extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Header style={{backgroundColor: '#ff5e3a'}} iosBarStyle="light-content">
                <Left>
                    <Button transparent>
                        <Icon name="ios-menu" style={styles.icon}/> 
                    </Button>
                    
                </Left>
                <Body>
                    <Title style={styles.headerTextStyle}>{this.props.headerText}</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="construct" style={styles.icon}/> 
                    </Button>
                </Right>
            </Header>
        );
    }
}
const styles = {
    icon: {
        color: '#fff',
        fontSize: 20
    },
    headerTextStyle: {
        color:"#fff",
        fontSize: 18

    }
}

export default HeaderComponents;

