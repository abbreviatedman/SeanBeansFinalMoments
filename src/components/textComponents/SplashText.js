import React, {Component} from 'react';
import Text from 'react-native';

export class SplashText extends Component {
  render() {
    return (
      <Text
        style={{
          fontFamily: 'Roboto',
          fontSize: 30,
          textAlign: 'center',
          color: 'white',
        }}
      >
        {this.props.children}
      </Text>
    );
  }
}
