import { kHeader, KAPI_ADDRESS_LOGIN } from "../constants/api";
import { AuthModel } from "../model/Auth";

export default class AuthService{
    doLogin=(authModel: AuthModel)=>{
        return fetch(KAPI_ADDRESS_LOGIN,{
            method:'POST',
            headers: kHeader,
            body: JSON.stringify(authModel),
        })
        .then(response => response.json())
        .then((response)=>{
            return response;
        })
        .catch((error) => {
            console.error(error);
        });;
    }
}