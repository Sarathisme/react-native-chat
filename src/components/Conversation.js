import React, {Component} from 'react';
import {Text, View, Image, StatusBar, TextInput, KeyboardAvoidingView, ScrollView, FlatList} from "react-native";
import Message from '../components/Message';
import styles from '../stylesheets/Conversation';
import {Header} from "react-native-elements";
import store from '../reducers/Store';

export default class Conversation extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            id: this.props.navigation.state.params.id,
            name: this.props.navigation.state.params.name,
            photo: this.props.navigation.state.params.photo
        }
    }

    render() {
        // TODO: Resolve the id problem
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="steelblue" barStyle="light-content" />

                <Header
                    containerStyle={styles.headerContainer}
                    leftComponent={<Image style={styles.profile} source={{uri: this.props.navigation.state.params.photo}}/>}
                    centerComponent={<View style={styles.nameContainer}>
                        <Text style={styles.name}>{this.props.navigation.state.params.name}</Text>
                    </View>}
                />

                <View style={styles.contentContainer}>
                    <View style={styles.messagesContainer}>
                        <ScrollView style={styles.messagesList}>
                            <FlatList data={store.getState().dummy}
                                      renderItem={chat => <Message chat={chat.item}
                                                                   chatName={this.state.name}
                                                                   chatPhoto={this.state.photo}
                                                                   chatId={this.state.id}
                                                                   currentName={store.getState().user.name}
                                                                   currentPhoto={store.getState().user.photo}
                                                                   currentId={store.getState().user.id}
                                      />}
                            />
                        </ScrollView>
                    </View>

                    <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
                        <TextInput style={styles.input} multiline={true} underlineColorAndroid={'green'}/>
                    </KeyboardAvoidingView>
                </View>
            </View>
        );
    }
}