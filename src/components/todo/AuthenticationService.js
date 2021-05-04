import axios from 'axios'
import {API_URL,USER_SESSION_ATTRIBUTE_NAME} from '../../Constants.js'

class AuthenticationService {

    executeBasicAuthService(username, password) {
        return axios.get(`${API_URL}/basicauth`, {
            headers: {
                authorization: this.createBasicAuthToken(username, password)
            }
        })
    }

    executeJWTAuthService(username, password) {
        var body = {
            username:username,
            password:password
        }
        console.log(body)
        return axios.post(`${API_URL}/authenticate`, body)
    }

    createBasicAuthToken(username, password) {
        let basicAuth = 'Basic ' + window.btoa(username + ":" + password)
        return basicAuth

    }

    createJWTAuthToken(token) {
        let jwtAuth = 'Bearer ' + token
        return jwtAuth
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptor(this.createBasicAuthToken(username, password))
    }

    registerSuccessfulLoginForJWT(username, token) {
        sessionStorage.setItem(USER_SESSION_ATTRIBUTE_NAME, username)

        this.setupAxiosInterceptor(this.createJWTAuthToken(token))
    }

    logout() {
        sessionStorage.removeItem(USER_SESSION_ATTRIBUTE_NAME)
    }

    isUserLoggedIn() {

        let user = sessionStorage.getItem(USER_SESSION_ATTRIBUTE_NAME)

        if (user === null) {
            return false
        } else
            return true

    }

    loggedInUserName() {

        let user = sessionStorage.getItem(USER_SESSION_ATTRIBUTE_NAME)

        if (user === null) {
            return ''
        } else
            return user

    }

    setupAxiosInterceptor(authHeaderToken) {

        axios.interceptors.request.use((config) => {
            if (this.isUserLoggedIn()) {
                config.headers.Authorization = authHeaderToken
            }
            return config
        })


    }
}

export default new AuthenticationService()