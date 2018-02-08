import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';
import MapView from 'react-native-maps';

class PlaceMap extends Component {
  // render() {
  //   return (
  //     <MapView
  //       style={styles.map}
  //       region={this.region}
  //     />
  //   );
  // }

  handleNavigation(la, lo) {
    const rla = this.region.latitude;
    const rlo = this.region.longitude;
    const url = `http://maps.apple.com/?saddr=${rla},${rlo}&daddr=${la},${lo}&dirflg=d`;
    return Linking.openURL(url);
  }
  render() {
    const { annotations } = this.props;
    annotations.forEach(annotation => {
      annotation.rightCalloutView = (
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleNavigation.bind(this, annotation.latitude, annotation.longitude)}
        >
          <Text style={styles.buttonText}>Navigation</Text>
        </TouchableHighlight>
      );
      })
    return (
        <MapView
          style={styles.map}
          region={this.region}
          annotations={annotations}
        />
     
    );
    }
  }

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default PlaceMap;