import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  Linking,
  TouchableOpacity
} from 'react-native';

import YouTube from 'react-native-youtube'

import {styles} from './styles/styles';
import {apiKey} from './apiKeys/youtube';

export class HomeScreen extends Component {
   static navigationOptions = {
      title: "Welcome to SBFM!"
    };
   state = {
      gitHubUrl: 'http://www.github.com/abbreviatedman/SeanBeansFinalMoments',
      youTubeUrl: 'https://youtu.be/1TFatsmjHpQ?t=3m13s',
      videoID: '1TFatsmjHpQ',
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: false,
      isLooping: true,
      duration: 0,
      currentTime: 0,
      fullscreen: false,
      controlStyle: 0,
      hasBegun: false,
      apiKey: apiKey,
    };
    gitHub = this.gitHub.bind(this);
    readyVideo = this.readyVideo.bind(this);

  gitHub() {
    const {gitHubUrl} = this.state;
    Linking
      .openURL(gitHubUrl)
      .catch(err => console.error('An error occcurred', err));
  }

  readyVideo() {
    this.setState({isPlaying: true, hasBegun: true})
    this._youTubeRef
      && this._youTubeRef.seekTo(193);
  }

  render() {
    const {navigate} = this.props.navigation;
    const {gitHub, readyVideo} = this;
    const {
      videoID,
      apiKey,
      isPlaying,
      isReady,
      error,
      isLooping,
      duration,
      currentTime,
      fullscreen,
      status,
      quality,
      controlStyle,
      hasBegun
    } = this.state;

    return (

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Sean Bean's Final Moments!
        </Text>
        <YouTube
          ref={(component) => {
            this._youTubeRef = component;
          }}
          apiKey={apiKey}
          videoId={videoID}
          play={isPlaying}
          loop={isLooping}
          fullscreen={fullscreen}
          controls={controlStyle}
          style={styles.player}
          onError={e => this.setState({ error: e.error })}
          onReady={e => this.setState({isReady: true})}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
          onProgress={undefined}
        />
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => readyVideo()}
          >
            <Text style={styles.buttonText}>
              {
                hasBegun
                  ? 'Restart Final Scene'
                  : 'Begin Final Scene'
              }
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState(state => ({isPlaying: !state.isPlaying}))}
          >
            <Text style={styles.buttonText}>
              {
                hasBegun
                  ? status === 'playing'
                    ? 'Pause' : 'Play'
                  : ''
              }
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>

        <Button
          onPress = {() => gitHub()}
          title="github"
        />
      </View>
      </ScrollView>
    );
  }
}


/*



        */
