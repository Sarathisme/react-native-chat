import {GoogleSignin, statusCodes} from "react-native-google-signin";
import webClientId from "../../config";
import {ToastAndroid} from "react-native";

class AuthController {
    static async signIn() {
        GoogleSignin.configure({
            webClientId: webClientId, // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            ToastAndroid.show("Successfully signed in!", ToastAndroid.SHORT);
            return userInfo.user;
        } catch (error) {
            console.log(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                ToastAndroid.show("Sign In Cancelled!", ToastAndroid.SHORT);
            } else if (error.code === statusCodes.IN_PROGRESS) {
                ToastAndroid.show("Sign In in progress", ToastAndroid.SHORT);
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                ToastAndroid.show("Play services not available", ToastAndroid.SHORT);
            } else {
                ToastAndroid.show("Sign In failed! Error!", ToastAndroid.SHORT);
            }
        }
    }

    static async signInWithDatabase(user) {
        // TODO: Add user to database
    }
}

export default AuthController;