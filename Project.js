import React from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from './src/components/HomeScreen';
import ChatScreen from './src/components/ChatScreen';
import Conversation from "./src/components/Conversation";

const Project= createStackNavigator({
    HomeScreen: {screen: HomeScreen, navigationOptions:{header: null}},
    ChatScreen: {screen: ChatScreen},
    Conversation: {screen: Conversation, navigationOptions: {header: null}}
},{
    initialRouteName: 'HomeScreen'
});

export default createAppContainer(Project);