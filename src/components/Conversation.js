import React, {Component} from 'react';
import {Text, View, Image, TouchableNativeFeedback, TouchableWithoutFeedback} from "react-native";
import styles from '../stylesheets/Conversation';

export default class Conversation extends Component<Props> {
    static navigationOptions = {
        headerLeft:
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => {alert("Here!")}}>
                    <Image source={plus} style={styles.logo}/>
                </TouchableWithoutFeedback>
            </View>
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello, world!</Text>
            </View>
        );
    }
}