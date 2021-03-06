import {StyleSheet} from "react-native";

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    logoContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 8
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 8
    },

    loadingContainer: {
        position: 'absolute',
        bottom: '20%',
        height: 80
    },

    google: {
        width: 192,
        height: 48
    },
});

export default HomeScreenStyles;