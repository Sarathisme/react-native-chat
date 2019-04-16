import React, {Component} from 'react';
import {Text, View, Image, StatusBar, TextInput, KeyboardAvoidingView, ScrollView, FlatList, Button, ToastAndroid} from "react-native";
import Message from '../components/Message';
import styles from '../stylesheets/Conversation';
import {Header} from "react-native-elements";
import store from '../reducers/Store';
import socket from '../socket/Socket';
import ChatController from "../controllers/ChatController";

export default class Conversation extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            id: this.props.navigation.state.params.id,
            name: this.props.navigation.state.params.name,
            photo: this.props.navigation.state.params.photo,
            text: null
        };

        this.getMessages = this.getMessages.bind(this);
        this.submit = this.submit.bind(this);
        this.subscribeToMessage = this.subscribeToMessage.bind(this);
    }

    subscribeToMessage() {
        socket.on(store.getState().user.id, data => {
           const messages = this.state.messages;
           messages.push(data);
           this.setState({
               messages: messages
           });
        });
    }

    componentDidMount(): void {
        this.subscribeToMessage();
    }

    async submit() {
        try {
            const messageObject = {
                'id': store.getState().user.id,
                'message': this.state.text,
                'timestamp': Date.now().toString()
            };

            const messages = this.state.messages;
            messages.push(messageObject);

            this.setState({
                'messages': messages
            });

            socket.emit("chat", {"interlocutor": this.props.navigation.state.params.id, "message": messageObject});

            const response = await ChatController.postMessage(this.props.navigation.state.params.id, store.getState().user.id, messageObject);

        }catch (e) {
            console.log(e);
        }
    }

    async getMessages(chat, current) {
        try {
            const response = await ChatController.getMessages(chat, current);
            this.setState({
                messages: response.data
            });
        } catch (e) {
            console.log(error);
        }
    }

    render() {
        if(this.state.messages.length === 0) {
            this.getMessages(this.props.navigation.state.params.id, store.getState().user.id);
        }

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
                        <ScrollView style={styles.messagesList} ref="scrollView"
                                    onContentSizeChange={(width,height) => this.refs.scrollView.scrollTo({y:height})}>
                            <FlatList data={this.state.messages}
                                      renderItem={chat => <Message chat={chat.item}
                                                                   chatPhoto={this.state.photo}
                                                                   chatId={this.state.id}
                                                                   currentPhoto={store.getState().user.photo}/>
                                      }
                            />
                        </ScrollView>
                    </View>

                    <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
                        <TextInput style={styles.input} multiline={true} placeholder="Type a message" onChangeText={(text) => this.setState({text: text})}/>
                        <Button title="Send" onPress={this.submit} style={styles.sendButton}/>
                    </KeyboardAvoidingView>
                </View>
            </View>
        );
    }
}