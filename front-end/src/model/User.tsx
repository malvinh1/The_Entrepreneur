export class UserModel{
    success: boolean
    id: number
    email: string
    user_role: 'User' | 'Admin'
    first_name: string
    last_name: string
    avatar: string | null
    membership: 'Basic' | 'Premium'
    gender: 'Male' | 'female' | 'Other'
    token: string
    constructor(){
        this.success=false;
        this.id=0
        this.email=''
        this.user_role="User"
        this.first_name=''
        this.last_name=''
        this.avatar=''
        this.membership='Basic'
        this.gender='Male'
        this.token=''
    }
    
    set(response:any){
        this.id=response.data.id
        this.email=response.data.email
        this.user_role=response.data.user_role
        this.first_name=response.data.first_name
        this.last_name=response.data.last_name
        this.avatar=response.data.avatar
        this.membership=response.data.membership
        this.gender=response.data.gender
        this.token=response.id
    }
}