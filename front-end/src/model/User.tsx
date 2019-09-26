class User{
    public success: boolean
    public id: number
    public email : string
    public user_role : 'User' | 'Admin'
    public first_name : string
    public last_name : string
    public avatar : string | null
    public membership : 'Basic' | 'Premium'
    public gender : 'Male' | 'female' | 'Other'
    public token : string
    constructor(){
        this.success = true
        this.id = 1
        this.email = 'tes@tes.co'
        this.user_role="User"
        this.first_name="123"
        this.last_name="456"
        this.avatar= null
        this.membership='Basic'
        this.gender="Male"
        this.token="123489542754892"
    }
}