import {StyleSheet} from "react-native";

const ChatScreenStyles = StyleSheet.create({
    logo: {
        width: 18,
        height: 18,
        marginRight: 12
    },

    container: {
        flex: 1,
        flexDirection: 'row'
    },

    main: {
        flex: 1,
        marginTop: 4,
        marginBottom: 4,
    },

    title: {
        color: 'white',
        fontSize: 20
    },
});

export default ChatScreenStyles;