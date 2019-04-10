import {API_URL} from "../../config";

class ChatController {
    static async getDataItems(id) {
        try {
            const response = await fetch(`${API_URL}chat/get/users`, {
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

            return response.json();
        }catch(error) {
            console.log(error);
        }
    }
}

export default ChatController;
