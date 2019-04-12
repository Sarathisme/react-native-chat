import {StyleSheet} from 'react-native';

const ConversationStyles = StyleSheet.create({
    container: {
        margin: 16
    },

    headerContainer: {
        height: 72,
        elevation: 8,
        backgroundColor: 'steelblue'
    },

    containerName: {
        flex: 2,
        justifyContent: 'center',
        marginBottom: 32
    },

    profile: {
        width: 48,
        height: 48,
        borderRadius: 64/2,
        marginBottom: 32,
        marginLeft: 8
    },

    name: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },

    email: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    }
});

export default ConversationStyles;