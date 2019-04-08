import React from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from './src/components/HomeScreen';
import ChatScreen from './src/components/ChatScreen';

const Project= createStackNavigator({
    HomeScreen: {screen: HomeScreen, navigationOptions:{header: null}},
    ChatScreen: {screen: ChatScreen, header: null},
},{
    initialRouteName: 'HomeScreen'
});

export default createAppContainer(Project);