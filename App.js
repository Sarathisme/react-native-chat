/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Animated, Easing} from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import logo from './assets/logo.png';

type Props = {};
export default class App extends Component<Props> {

  signIn() {

  }

  componentDidMount(): void {

  }

  render() {
    let spinValue = new Animated.Value(0);

    Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 20000,
          easing: Easing.linear
        }
    ).start();

    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Animated.Image style={{
              maxWidth: 200,
              maxHeight: 200,
              transform: [{rotate: spin}]
            }} source={logo}/>
          </View>
          <View style={styles.buttonContainer}>
            <GoogleSigninButton
                style={styles.google}
                size={GoogleSigninButton.Size.Standard}
                color={GoogleSigninButton.Color.Light}
                onPress={this.signIn} />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 8
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 8
  },

  google: {
    width: 192,
    height: 48
  },
});
