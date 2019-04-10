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

        const results = await response.json();
        return results;
    }
}

export default ChatController;
