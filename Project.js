import React from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from './src/components/HomeScreen';
import ChatScreen from './src/components/ChatScreen';
import Conversation from "./src/components/Conversation";
import NewUser from "./src/components/NewUser";

const Project= createStackNavigator({
    HomeScreen: {screen: HomeScreen, navigationOptions:{header: null}},
    ChatScreen: {screen: ChatScreen, navigationOptions: {header: null}},
    Conversation: {screen: Conversation, navigationOptions: {header: null}},
    NewUser: {screen: NewUser}
},{
    initialRouteName: 'HomeScreen'
});

export default createAppContainer(Project);