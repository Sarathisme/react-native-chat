import {API_URL} from "../../config";

class ChatController {
    static async getDataItems(id) {
        let response;
        try {
            response = await fetch(`${API_URL}chat/get/users`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-type'
                },
                body: JSON.stringify({
                    "id": id,
                })
            });
        }catch(error) {
            console.log(error);
        }

        return await response.json();
    }

    static async getMessages(chat, current) {
        let response;
        try {
            response = await fetch(`${API_URL}chat/get/messages`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-type'
                },
                body: JSON.stringify({
                    "interlocutor": chat,
                    "id": current,
                })
            });
        }catch(error) {
            console.log(error);
        }

        return await response.json();
    }

    static async postMessage(chat, current, message) {
        let response;

        try {
            response = await fetch(`${API_URL}chat/post/messages`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-type'
                },
                body: JSON.stringify({
                    "interlocutor": chat,
                    "id": current,
                    "message": message
                })
            });
        }catch (e) {
            console.log(e);
        }

        return await response.json();
    }
}

export default ChatController;
