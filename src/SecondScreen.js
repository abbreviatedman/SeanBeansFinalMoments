import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import {styles} from './styles/styles';

export class SecondScreen extends Component {
  static navigationOptions = {
    title: 'SecondScreen'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>This is another screen.</Text>
      </View>
    )
  }
}
