import AuthService from '../service/AuthService'
import { AuthModel } from '../model/Auth';
import { UserModel } from '../model/User'

export default class LoginController{
    private authService: AuthService
    user: UserModel;
    authModel: AuthModel;
    isProcessing: boolean;

    constructor(){
        this.isProcessing=false;
        this.authModel=new AuthModel();
        this.authService = new AuthService()
        this.user = new UserModel();
    }
    
    makeLogin=async ()=>{
        this.isProcessing=true;
        console.log(this.authModel)
        this.user.set(await this.authService.doLogin(this.authModel))
        console.log(this.user);
        this.isProcessing=false;
    }
    
}