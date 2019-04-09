import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Image, TouchableWithoutFeedback, FlatList} from 'react-native';
import User from './User';
import search from '../../search.png';
import plus from '../../plus.png';
import styles from '../stylesheets/ChatScreen';
import store from '../reducers/Store';
import ChatController from '../controllers/ChatController';

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'email': store.getState().user.email,
            'id': store.getState().user.id
        };
    }

    async componentWillMount(): void {
        store.subscribe(this.render);
        let chats;
        try {
            chats = await ChatController.getDataItems(store.getState().user.id);
        } catch (e) {
            console.log(e);
        }
        store.dispatch({type: 'FETCH_DATA_ITEMS', chats: chats});
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
        if(store.getState().data.chats !== undefined) {
            return (
                <View style={styles.main}>
                    <FlatList data={store.getState().data.chats}
                              renderItem={(chat) => <User email={this.state.email}
                                                          name={chat.item.name}
                                                          photo={chat.item.photo}
                                                          messages={chat.item.messages}
                                                          user={this.state.id}/>
                              }/>
                </View>
            );
        } else {
            return (
                <View style={styles.main}/>
            )
        }

    }
}