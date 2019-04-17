import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Image, FlatList, ScrollView} from 'react-native';
import plus from '../../plus.png';
import User from './User';
import FAB from 'react-native-fab'
import styles from '../stylesheets/ChatScreen';
import store from '../reducers/Store';
import ChatController from '../controllers/ChatController';
import NewUser from "./NewUser";

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'email': store.getState().user.email,
            'id': store.getState().user.id,
            'load': false,
            'visible': false
        };

        this.dismissDialog = this.dismissDialog.bind(this);
    }

    async componentWillMount(): void {
        let chats;
        try {
            chats = await ChatController.getDataItems(store.getState().user.id);
        } catch (e) {
            console.log(e);
        }
        store.dispatch({type: 'FETCH_DATA_ITEMS', chats: chats});
        this.setState({'load': true});
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'steelblue',
            textColor: 'white'
        },
        headerTitle: <Text style={styles.title}>Chat</Text>,
    };

    dismissDialog() {
        this.setState({visible: false});
    }

    render() {
        return <View style={styles.main}>
            <NewUser visible={this.state.visible} dismiss={this.dismissDialog}/>
            <StatusBar backgroundColor="steelblue" barStyle="light-content" />

            <ScrollView style={styles.scrollView}>
                <FlatList data={store.getState().data.chats}
                          renderItem={chat => <User id={chat.item.user_id}
                                                    name={chat.item.name}
                                                    photo={chat.item.photo}
                                                    messages={chat.item.messages}
                                                    user={this.state.id}
                                                    navigation={this.props.navigation}/>
                          }
                          keyExtractor={chat => {
                              return chat.user_id;
                          }
                      }
                />
            </ScrollView>
            <FAB buttonColor="red"
                 iconTextColor="#FFFFFF"
                 onClickAction={() => {this.setState({visible: true})}}
                 visible={true}
            />
        </View>;
    }
}