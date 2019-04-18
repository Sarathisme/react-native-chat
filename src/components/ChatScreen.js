import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    FlatList,
    ScrollView,
    Image,
    TouchableNativeFeedback,
    ToastAndroid
} from 'react-native';
import {Header} from "react-native-elements";
import {GoogleSignin} from "react-native-google-signin";
import User from './User';
import FAB from 'react-native-fab'
import styles from '../stylesheets/ChatScreen';
import store from '../reducers/Store';
import ChatController from '../controllers/ChatController';
import NewUser from "./NewUser";
import signOut from '../../sign-out.png';

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'email': store.getState().user.email,
            'id': store.getState().user.id,
            'load': false,
            'visible': false
        };

        this.newUser = this.newUser.bind(this);
        this.logout = this.logout.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentWillMount(): void {
        this.getData();
    }

    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
        console.log("Update!");
    }

    async getData() {
        try {
            let chats = await ChatController.getDataItems(store.getState().user.id);
            store.dispatch({type: 'FETCH_DATA_ITEMS', chats: chats});
            this.setState({'load': true});
        } catch (e) {
            console.log(e);
        }
    }

    newUser() {
        this.props.navigation.navigate("NewUser");
    }

    componentDidMount(): void {
        this.willFocusListener = this.props.navigation.addListener(
            'willFocus',
            () => {
                this.getData()
            }
        )
    }

    componentWillUnmount(): void {
        this.willFocusListener.remove();
    }

    async logout() {
        try {
            await GoogleSignin.signOut();
            store.dispatch({type: 'SIGN_OUT_USER'});
            ToastAndroid.show("Successfully signed out!", ToastAndroid.SHORT);
            this.props.navigation.navigate("HomeScreen", {});
        }catch (e) {
            console.log(e);
        }
    }

    render() {
        return <View style={styles.main}>
            <Header containerStyle={styles.header}
                    leftComponent={<View style={styles.nameContainer}><Text style={styles.name}>Chat</Text></View>}
                    rightComponent={<View style={styles.imageContainer}><TouchableNativeFeedback onPress={this.logout}><Image style={styles.image} source={signOut}/></TouchableNativeFeedback></View>}
            />

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
                 onClickAction={this.newUser}
                 visible={true}
            />
        </View>;
    }
}