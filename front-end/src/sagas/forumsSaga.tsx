import { API_HOST, TestToken } from '../constants/api';
import { ForumData } from '../model/forum';


export class ForumSaga{
  
  kHttpHeader={
    headers:{
      'Content-Type': 'application/json',
      'Authorization': TestToken
    },
  }

  doGetUmum=()=>{
    return fetch(`${API_HOST}/api/feature/get-forums`,{
      method: 'GET',
      headers: this.kHttpHeader.headers,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      var res: ForumData[] = responseJson.data.umum
       return {
         error: false,
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

  doGetJual=()=>{
    return fetch(`${API_HOST}/api/feature/get-forums`,{
      method: 'GET',
      headers: this.kHttpHeader.headers,
    })
    .then((response) => response.json())
    .then((responseJson) => {
       var res: ForumData[] = responseJson.data.jual
       return {
         error: false,
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

  doGetBeli=()=>{
    return fetch(`${API_HOST}/api/feature/get-forums`,{
      method: 'GET',
      headers: this.kHttpHeader.headers,
    })
    .then((response) => response.json())
    .then((responseJson) => {
       var res: ForumData[] = responseJson.data.beli
       return {
         error: false,
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

  doGetForumDetails=(id: String)=>{
    return fetch(`${API_HOST}/api/feature/get-forum/${id}`,{
      method: 'GET',
      headers: this.kHttpHeader.headers,
    })
    .then((response) => response.json())
    .then((responseJson) => {
       return {
         error: false,
         data: responseJson.data
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