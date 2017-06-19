import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  Linking,
  TouchableOpacity
} from 'react-native';

import {styles} from './styles/styles';
import {YouTubePlayer} from './components/YouTubePlayer';
import {navigation} from 'react-navigation';

import {youTubeData} from './movieData/youtube';

export class MovieList extends Component {
   static navigationOptions = {
      title: "Welcome to SBFM!"
    };
   state = {
      gitHubUrl: 'http://www.github.com/abbreviatedman/SeanBeansFinalMoments'
    }
    gitHub = this.gitHub.bind(this);

  gitHub() {
    const {gitHubUrl} = this.state;
    Linking
      .openURL(gitHubUrl)
      .catch(err => console.error('An error occcurred', err));
  }

  render() {
    const {navigate} = this.props.navigation;
    const {gitHub} = this;

    return (
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
    );
  }
}
