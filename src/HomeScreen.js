import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import {styles} from './styles/styles';

export class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome to SBFM!"
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Sean Bean's Final Moments!
        </Text>
        <Text style={styles.instructions}>
          Click below to go to a SECOND screen!!
        </Text>
        <Button
          onPress={() => navigate('SecondScreen')}
          title="A second screen? WHOA."
        />
      </View>
    );
  }
}
