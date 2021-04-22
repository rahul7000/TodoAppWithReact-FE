class AuthenticationService{

    registerSuccessfulLogin(userName,password){
        sessionStorage.setItem("authenticatedUser",userName)
    }

    logout(){
        sessionStorage.removeItem("authenticatedUser")
    }

    isUserLoggedIn(){
        
        let user = sessionStorage.getItem("authenticatedUser")
        
        if(user === null){
            return false
        }else
            return true
        
    }
}

export default new AuthenticationService()