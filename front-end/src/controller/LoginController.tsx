import AuthService from '../service/AuthService'

export default class LoginController{
    private authService: AuthService
    constructor(){
        this.authService = new AuthService()
    }
    makeLogin=()=>{
        this.authService.doLogin()
    }
}