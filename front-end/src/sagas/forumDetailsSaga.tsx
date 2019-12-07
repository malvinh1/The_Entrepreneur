import { API_HOST, TestToken } from '../constants/api';

export class ForumDetailsSaga{
  kHttpHeader={
    headers:{
      'Content-Type': 'application/json',
      'Authorization': TestToken
    },
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

  addComment=(id_forum, id_user, comment)=>{
    return fetch(`${API_HOST}/api/feature/add-comment`,{
        method: 'POST',
        headers: this.kHttpHeader.headers,
        body: JSON.stringify({
            id_forum: id_forum,
            id_user: id_user,
            comment: comment
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
         return {
           error: !responseJson.success,
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