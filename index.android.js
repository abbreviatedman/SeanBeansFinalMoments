import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation'

import {SplashScreen} from './src/components/SplashScreen';
import {MovieList} from './src/components/MovieList';
import {YouTubePlayer} from './src/components/YouTubePlayer';

const SeanBeansFinalMoments = StackNavigator({
  Home: {screen: SplashScreen},
  MovieList: {screen: MovieList},
  YouTubePlayer: {screen: YouTubePlayer}
});

AppRegistry.registerComponent('SeanBeansFinalMoments', () => SeanBeansFinalMoments);
