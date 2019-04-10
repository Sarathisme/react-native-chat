import React, {Component} from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from "react-native";
import styles from '../stylesheets/User';

export default class Chat extends Component {
    static navigationOptions = {
        headerLeft:
            <View style={styles.container}>
                <Text>Hello, world!</Text>
            </View>
    };

    render() {
        return (
            <View>
                <Text>Hello, world!</Text>
            </View>
        );
    }
}