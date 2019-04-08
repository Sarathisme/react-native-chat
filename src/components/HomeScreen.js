/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Animated, Easing} from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';

import userReducer from '../reducers/userReducer';
import { createStore } from 'redux';
import styles from '../stylesheets/App';
import logo from '../../assets/logo.png';

import AuthController from '../controllers/AuthController';

type Props = {};

const store = createStore(
    userReducer
);

export default class HomeScreen extends Component<Props> {
    signIn = async () => {
        const user = await AuthController.signIn();
        store.dispatch({type: 'SIGN_IN_USER', user: user});
        this.props.navigation.navigate("ChatScreen");
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

