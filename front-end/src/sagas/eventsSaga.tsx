
import { API_HOST, TestToken } from '../constants/api';
import {Event} from '../model/event';

export class EventsSaga{
  
  kHttpHeader={
    headers:{
      'Content-Type': 'application/json',
      'Authorization': TestToken
    },
  }

  getEventDetails=(id)=>{
    return fetch(`${API_HOST}/api/feature/get-event/${id}`,{
      method: 'GET',
      headers: this.kHttpHeader.headers,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      var res: Event = responseJson.data
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
