/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ActivityIndicator, Animated, Easing, StatusBar, ToastAndroid, View} from 'react-native';
import {GoogleSigninButton} from 'react-native-google-signin';

import store from '../reducers/Store';
import styles from '../stylesheets/HomeScreen';
import logo from '../../assets/logo.png';

import AuthController from '../controllers/AuthController';

type Props = {};

export default class HomeScreen extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    signIn = async () => {
        this.progressDialog(true);
        const user = await AuthController.signIn();
        this.progressDialog(false);
        try {
            store.dispatch({type: 'SIGN_IN_USER', user: user});
        }catch (e) {
            ToastAndroid.show("Cannot sign in! Please try again later.", ToastAndroid.LONG);
        }
        this.props.navigation.navigate("ChatScreen");
    };

    progressDialog(visible) {
        this.setState({
            loading: visible
        })
    }

    getSpinValue() {
        let spinValue = new Animated.Value(0);

        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 20000,
                easing: Easing.linear
            }
        ).start();

        return spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
    }

    render() {
        const isLoading = this.state.loading;

        try {
            return (
                <View style={styles.container}>
                    <StatusBar backgroundColor="steelblue" barStyle="light-content"/>
                    <View style={styles.logoContainer}>
                        <Animated.Image style={{
                            maxWidth: 200,
                            maxHeight: 200,
                            transform: [{rotate: this.getSpinValue()}]
                        }} source={logo}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <GoogleSigninButton
                            style={styles.google}
                            size={GoogleSigninButton.Size.Standard}
                            color={GoogleSigninButton.Color.Light}
                            onPress={this.signIn}
                            disabled={this.state.loading}/>
                    </View>

                    {isLoading && (
                        <ActivityIndicator
                            style={styles.loadingContainer}
                            size="large"
                        />
                    )}
                </View>
            );
        }catch (e) {
            console.log(e);
        }
    }
}

