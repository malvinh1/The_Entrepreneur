export default class AuthService{
    doLogin=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos',).then((response)=>{
            console.log(response.json());
        });
    }
}