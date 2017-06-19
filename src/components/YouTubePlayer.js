import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import YouTube from 'react-native-youtube';

import {styles} from '../styles/styles';
import {apiKey} from '../apiKeys/youtube';

export class YouTubePlayer extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
  });

  constructor(props) {
    super(props);
    const {navigation} = this.props;
    const {title, videoId, timestamp} = navigation.state.params;
    const navigationOptions = {
      title: title
    };
    this.state = {
      title: title,
      videoId: videoId,
      timestamp: timestamp,
      status: null,
      isPlaying: false,
      isLooping: true,
      fullscreen: false,
      controlStyle: 0,
      hasBegun: false,
    };
    this.readyVideo = this.readyVideo.bind(this);
  }

  readyVideo() {
    const {timestamp} = this.state;
    this.setState({isPlaying: true, hasBegun: true});
    this._youTubeRef
      && this._youTubeRef.seekTo(timestamp);
  }

  render() {
    const {readyVideo} = this;
    const {
      videoId,
      title,
      isPlaying,
      isLooping,
      fullscreen,
      status,
      controlStyle,
      hasBegun
    } = this.state;

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.instructions}>
            Sean Bean's Final Moments in:
          </Text>
          <Text style={styles.welcome}>
            {title}
          </Text>
          <YouTube
            ref={(component) => {
              this._youTubeRef = component;
            }}
            apiKey={apiKey}
            videoId={videoId}
            play={isPlaying}
            loop={isLooping}
            fullscreen={fullscreen}
            controls={controlStyle}
            style={styles.player}
            onError={event => this.setState({ error: event.error })}
            onReady={() => this.setState({isReady: true})}
            onChangeState={event => this.setState({ status: event.state })}
            onChangeQuality={event => this.setState({ quality: event.quality })}
            onChangeFullscreen={event => this.setState({ fullscreen: event.isFullscreen })}
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
        </ScrollView>
    );
  }
}


/*


<Text style={styles.instructions}>
  Sean Bean's Final Moments in:
</Text>
<Text style={styles.welcome}>
  {title}
</Text>
<YouTube
  ref={(component) => {
    this._youTubeRef = component;
  }}
  apiKey={apiKey}
  videoId={videoId}
  play={isPlaying}
  loop={isLooping}
  fullscreen={fullscreen}
  controls={controlStyle}
  style={styles.player}
  onError={event => this.setState({ error: event.error })}
  onReady={() => this.setState({isReady: true})}
  onChangeState={event => this.setState({ status: event.state })}
  onChangeQuality={event => this.setState({ quality: event.quality })}
  onChangeFullscreen={event => this.setState({ fullscreen: event.isFullscreen })}
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

*/
