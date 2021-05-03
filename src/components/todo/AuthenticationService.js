import axios from 'axios'

class AuthenticationService {

    executeBasicAuthService(username,password){
        return axios.get('http://localhost:8080/basicauth',{
            headers:{
                authorization:this.createBasicAuthToken(username,password)
            }
        })
    }

    createBasicAuthToken(username,password){
        let basicAuth = 'Basic ' + window.btoa(username + ":" + password)
        return basicAuth

    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem("authenticatedUser", username)

        
        this.setupAxiosInterceptor(this.createBasicAuthToken(username,password))
    }

    logout() {
        sessionStorage.removeItem("authenticatedUser")
    }

    isUserLoggedIn() {

        let user = sessionStorage.getItem("authenticatedUser")

        if (user === null) {
            return false
        } else
            return true

    }

    loggedInUserName() {

        let user = sessionStorage.getItem("authenticatedUser")

        if (user === null) {
            return ''
        } else
            return user

    }

    setupAxiosInterceptor(basicAuth) {

        axios.interceptors.request.use((config) => {
            if (this.isUserLoggedIn()) {
                config.headers.Authorization = basicAuth
            }
            return config
        })


    }
}

export default new AuthenticationService()