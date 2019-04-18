import {StyleSheet} from 'react-native';

const ConversationStyles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        flex: 1,
    },

    headerContainer: {
        height: 72,
        elevation: 8,
        backgroundColor: 'steelblue',
    },

    contentContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-end'
    },

    nameContainer: {
        flex: 2,
        justifyContent: 'center',
        marginBottom: 32
    },

    messagesContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 48
    },

    messagesList: {
        flex: 1,
    },

    inputContainer: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: '#eaeaea',
        bottom: 0
    },

    inputFieldContainer: {
        flex: 4,
        height: 48
    },

    inputField: {
        color: 'black',
        textAlignVertical: 'top',
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 4
    },

    sendButton: {
        alignItems: 'center',
        textAlign: 'center'
    },

    profile: {
        width: 48,
        height: 48,
        borderRadius: 64/2,
        marginBottom: 32,
        marginLeft: 8
    },

    name: {
        color: 'white',
    },

    email: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ConversationStyles;