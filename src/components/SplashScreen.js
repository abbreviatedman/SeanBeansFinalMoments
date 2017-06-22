import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  Linking,
  TouchableOpacity
} from 'react-native';

import {styles} from '../styles/styles';

import {MovieList} from './MovieList';
import {SplashHeading} from './textComponents/SplashHeading';
import {SplashText} from './textComponents/SplashText';

import {youTubeData} from '../movieData/youtube';

export class SplashScreen extends Component {
   static navigationOptions = {
      title: "Welcome to Sean Bean's Final Moments!"
    };
    navigate = this.props.navigation.navigate;

  componentDidMount() {
    setTimeout(() => {this.navigate('MovieList')}, 5000);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.splashContainer}
          onPress={() => this.navigate('MovieList')}
        >
          <View>
            <SplashText>
              {`Does Sean live?\nDoes Sean die?`}
            </SplashText>
          </View>
          <View>
              <SplashText>
                {`Watch his last scenes yourself!`}
              </SplashText>
          </View>
          <View>
            <SplashText>
              {`(Spoiler alert: he probably dies.)`}
            </SplashText>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


/*

<ScrollView contentContainerStyle={styles.container}>
  <Text style={styles.welcome}>
    {`Welcome to Sean Bean's Final Moments!`}
  </Text>
  <Text style={styles.instructions}>
    {`Here are the final scenes we have in the library so far. (More to come!)`}
  </Text>
  {youTubeData.map(movie => {
    return (
      <TouchableOpacity
        key={movie.title}
        style={styles.button}
        onPress={() => navigate('YouTubePlayer', movie)}
      >
        <Text style={styles.buttonText}>
          {movie.title}
        </Text>
      </TouchableOpacity>
    )
  })}

  <View style={styles.button}>
    <Button
      onPress={() => gitHub()}
      title="Source"
    />
  </View>
</ScrollView>

*/
