import {StyleSheet} from "react-native";

const UserStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'white'
    },

    containerProfile: {
        flex: 1,
        justifyContent: 'center'
    },

    containerName: {
        flex: 2,
        justifyContent: 'center'
    },

    containerBadge: {
        flex: 1,
        justifyContent: 'center'
    },

    profile: {
        width: 60,
        height: 60,
        borderRadius: 64 / 2,
        overflow: "hidden",
    },

    name: {
        fontWeight: 'bold'
    },

    email: {
        fontSize: 12,
    },

    badge: {
        justifyContent: 'center',
    }

});

export default UserStyles;