import React, {Component} from 'react';
import {Text, View, Image, TouchableNativeFeedback, StatusBar} from "react-native";
import styles from '../stylesheets/User';
import {Badge} from "react-native-elements";

export default class User extends Component<Props> {

    getMessagesCount(list, id) {
        let noOfMessages = 0;
        list.forEach(message => {
            if(message.id !== id) {
                noOfMessages++;
            }
        });

        if(noOfMessages > 99) return "99+";
        else return noOfMessages.toString();
    }

    onPress(name, photo, id) {
        this.props.navigation.navigate("Conversation", {name: name, photo: photo, id: id});
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor="steelblue" barStyle="light-content" />
                <TouchableNativeFeedback onPress={() => this.onPress(this.props.name, this.props.photo, this.props.id)}>
                    <View style={styles.container}>
                        <View style={styles.containerProfile}>
                            <Image style={styles.profile} source={{uri: this.props.photo}}/>
                        </View>
                        <View style={styles.containerName}>
                            <Text style={styles.name}>{this.props.name}</Text>
                        </View>
                        <View style={styles.containerBadge}>
                            <Badge value={this.getMessagesCount(this.props.messages, this.props.user)} width={36} height={48} status="error" containerStyle={styles.badge}/>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}