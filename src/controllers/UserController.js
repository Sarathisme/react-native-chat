import {API_URL} from "../../config";

export default class UserController {
    static async getUsersByQuery(id, query) {
        let response;
        try {
            response = await fetch(`${API_URL}get/users`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-type'
                },
                body: JSON.stringify({
                    "id": id,
                    "query": query
                })
            });
        }catch(error) {
            console.log(error);
        }

        return await response.json();
    }
}