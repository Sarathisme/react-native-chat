import {GoogleSignin, statusCodes} from "react-native-google-signin";
import webClientId, {API_URL} from '../../config';
import {ToastAndroid} from "react-native";

class AuthController {
    static async signIn() {
        GoogleSignin.configure({
            webClientId: webClientId,
            offlineAccess: false,
        });

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const response = await this.signInWithDatabase(userInfo);
            if(response.status === 200) {
                ToastAndroid.show("Successfully signed in!", ToastAndroid.SHORT);
                return userInfo.user;
            } else {
                ToastAndroid.show("Sign In failed!");
            }
        } catch (error) {
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

    static async signInWithDatabase(userInfo) {
        const user = userInfo.user;
        return await fetch(`${API_URL}add/user`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-type'
            },
            body: JSON.stringify({
                id: user.id,
                name: user.name,
                email: user.email,
                photo: user.photo,
            })
        });
    }
}

export default AuthController;