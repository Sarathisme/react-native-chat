import React, {Component} from 'react';
import {Text, View, Image, TouchableNativeFeedback, StatusBar} from "react-native";
import styles from '../stylesheets/Conversation';
import {Header} from "react-native-elements";

export default class Conversation extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <View>
                <StatusBar backgroundColor="steelblue" barStyle="light-content" />
                <Header
                    containerStyle={styles.headerContainer}
                    leftComponent={<Image style={styles.profile} source={{uri: this.props.navigation.state.params.data.photo}}/>}
                    centerComponent={<View style={styles.containerName}>
                        <Text style={styles.name}>{this.props.navigation.state.params.data.name}</Text>
                        <Text style={styles.email}>{this.props.navigation.state.params.data.email}</Text>
                    </View>}
                />
                <View style={styles.container}>
                    <Text>Hello, world!</Text>
                </View>
            </View>
        );
    }
}