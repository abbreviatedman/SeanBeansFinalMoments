import {StyleSheet, PixelRatio, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#A5114D',
    justifyContent: 'space-around'
  },
  splashHeading: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
  welcome: {
    fontFamily: 'Roboto',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  player: {
    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').width / (16 / 9)),
    alignSelf: 'stretch',
    backgroundColor: 'black',
    marginVertical: 10,
  },
});
