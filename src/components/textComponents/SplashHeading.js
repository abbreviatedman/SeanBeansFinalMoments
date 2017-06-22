import React, {Component} from 'react';
import Text from 'react-native';

import SplashText from './SplashText';

export class SplashHeading extends Component {
  render() {
    <SplashText>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 40
      }}>
        {this.props.children}
      </Text>
    </SplashText>
  }
}
