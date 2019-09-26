import AuthService from '../service/AuthService'
import { AuthModel } from '../model/Auth';
import { UserModel } from '../model/User'

export default class LoginController{
    private authService: AuthService
    user: UserModel;
    authModel: AuthModel;

    constructor(){
        this.authModel=new AuthModel();
        this.authService = new AuthService()
        this.user = new UserModel();
    }
    
    makeLogin=async()=>{
        this.user = await this.authService.doLogin(this.authModel)
        return this.user.success
    }
    
}