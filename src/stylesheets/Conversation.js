import {StyleSheet} from 'react-native';

const ConversationStyles = StyleSheet.create({

    container: {
        flexDirection: 'column'
    },

    headerContainer: {
        height: 72,
        elevation: 8,
        backgroundColor: 'steelblue',
    },

    contentContainer: {
        flexDirection: 'column',
        height: '100%',
    },

    nameContainer: {
        flex: 2,
        justifyContent: 'center',
        marginBottom: 32
    },

    messagesContainer: {
        flex: 3.6,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 0,
        backgroundColor: '#eaeaea',
    },

    messagesList: {
        flex: 1,
    },

    input: {
        flex: 1,
        color: 'black',
        height: 300,
        textAlignVertical: 'top',
    },

    sendButton: {
        alignItems: 'center',
        textAlign:'center'
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
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ConversationStyles;