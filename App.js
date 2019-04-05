/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Animated, Easing, ToastAndroid} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import webClientId from './config';
import logo from './assets/logo.png';

type Props = {};
export default class App extends Component<Props> {

  signIn = async () => {
    console.log(webClientId);
    GoogleSignin.configure({
      webClientId: webClientId, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo.user);
      ToastAndroid.show("Successfully signed in!", ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        ToastAndroid.show("Sign In Cancelled!", ToastAndroid.SHORT);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        ToastAndroid.show("Sign In in progress", ToastAndroid.SHORT);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        ToastAndroid.show("Play services not available", ToastAndroid.SHORT);
      } else {
        // some other error happened
        ToastAndroid.show("Sign In failed! Error!", ToastAndroid.SHORT);
      }
    }
  };

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
