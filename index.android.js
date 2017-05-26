import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation'

import {HomeScreen} from './src/HomeScreen';
import {SecondScreen} from './src/SecondScreen';

const SeanBeansFinalMoments = StackNavigator({
  Home: {screen: HomeScreen},
  SecondScreen: {screen: SecondScreen}
});

AppRegistry.registerComponent('SeanBeansFinalMoments', () => SeanBeansFinalMoments);
