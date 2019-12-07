import { TestToken, API_HOST } from "../constants/api";
import {User} from "../model/user";

export class HomeSaga{
  kHttpHeader={
    headers:{
      'Content-Type': 'application/json',
      'Authorization':TestToken
    },
  }

  doGetHomeData=()=>{
    return fetch(`${API_HOST}/api/page/home`,{
      method: 'GET',
      headers: this.kHttpHeader.headers,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      var res: Event[] = responseJson.data.events
      var user: User = responseJson.data.user
       return {
         error: !responseJson.success,
         data: res,
         user: user
       }
    })
    .catch((error) => {
      return {
        error: true,
        errorDetail: error
      }
    });
 
  }
  
}