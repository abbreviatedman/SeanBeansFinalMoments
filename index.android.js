import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation'

import {MovieList} from './src/MovieList';
import {YouTubePlayer} from './src/components/YouTubePlayer';

const SeanBeansFinalMoments = StackNavigator({
  Home: {screen: MovieList},
  YouTubePlayer: {screen: YouTubePlayer}
});

AppRegistry.registerComponent('SeanBeansFinalMoments', () => SeanBeansFinalMoments);
