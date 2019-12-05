import { TestToken, API_HOST } from "../constants/api";

export class HomeSaga{
  kHttpHeader={
    headers:{
      'Content-Type': 'application/json',
      'Authorization':TestToken
    },
  }

  doGetEvents=()=>{
    return fetch(`${API_HOST}/api/page/home`,{
      method: 'GET',
      headers: this.kHttpHeader.headers,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      var res: Event[] = responseJson.data.events
       return {
         error: !responseJson.success,
         data: res
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