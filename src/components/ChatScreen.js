import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Image, TouchableWithoutFeedback} from 'react-native';
import search from '../../search.png';
import plus from '../../plus.png';
import styles from '../stylesheets/ChatScreen';

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        headerTitle: "Chat",
        headerRight:
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => {alert("Here!")}}>
                    <Image source={plus} style={styles.logo}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {alert("Here!")}}>
                    <Image source={search} style={styles.logo}/>
                </TouchableWithoutFeedback>
            </View>
    };

    render() {
        return (
            <View style={styles.main}>
                <Text>Hello, world!</Text>
            </View>
        );
    }
}