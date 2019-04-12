import React, {Component} from 'react';
import {Text, View, Image} from "react-native";
import styles from '../stylesheets/Message';

export default class Message extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const {chatName, chatPhoto, chatId, currentName, currentPhoto, currentId, chat} = this.props;
        if(chat.id === chatId) {
            return (
                <View style={styles.containerLeft}>
                    <Image style={styles.photoLeft} source={{uri: chatPhoto}}/>
                    <Text style={styles.messageLeft}>{chat.message}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.containerRight}>
                    <Text style={styles.messageRight}>{chat.message}</Text>
                    <Image style={styles.photoRight} source={{uri: currentPhoto}}/>
                </View>
            );
        }
    }
}