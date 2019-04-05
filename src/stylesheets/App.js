import {StyleSheet} from "react-native";

const AppStyles = StyleSheet.create({
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

    google: {
        width: 192,
        height: 48
    },
});

export default AppStyles;