import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Image, TouchableWithoutFeedback, FlatList} from 'react-native';
import search from '../../search.png';
import plus from '../../plus.png';
import styles from '../stylesheets/ChatScreen';
import store from '../reducers/Store';
import ChatController from '../controllers/ChatController';

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(): void {
        store.subscribe(this.render);
        const chats = ChatController.getDataItems();
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
        return (
            <View style={styles.main}>
                <FlatList
                    data={store.getState().data}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                />
            </View>
        );

    }
}