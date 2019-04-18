import {StyleSheet} from "react-native";

const ChatScreenStyles = StyleSheet.create({
    logo: {
        width: 18,
        height: 18,
        marginRight: 12
    },

    container: {
        flex: 1,
        flexDirection: 'column'
    },

    main: {
        flex: 1,
        marginBottom: 4,
    },

    header: {
        backgroundColor: 'steelblue',
        elevation: 8
    },

    nameContainer: {
        flex: 2,
        justifyContent: 'center',
        marginBottom: 32
    },

    name: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        marginLeft: 8
    },

    imageContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        marginBottom: 22,
        resizeMode: 'contain',
        width: 32,
        height: 32
    }
});

export default ChatScreenStyles;