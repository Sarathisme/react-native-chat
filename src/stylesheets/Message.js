import {StyleSheet} from 'react-native';

const MessageStyles = StyleSheet.create({
    containerLeft: {
        marginLeft: 8,
        marginBottom: 8,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },

    containerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
        marginBottom: 8,
        marginTop: 8,
    },

    photoLeft: {
        width: 32,
        height: 32,
        borderRadius: 32/2
    },

    messageLeft: {
        marginLeft: 8,
        marginRight: 8,
        flexWrap: 'wrap',
        flex: 1,
        color: 'black'
    },

    photoRight: {
        width: 32,
        height: 32,
        borderRadius: 32/2
    },

    messageRight: {
        marginLeft: 8,
        marginRight: 8,
        flexWrap: 'wrap',
        flex: 1,
        color: 'black',
        textAlign: 'right'
    }
});

export default MessageStyles;