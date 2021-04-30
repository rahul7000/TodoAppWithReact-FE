//const { default: axios } = require("axios");
import axios from 'axios'

class HelloWorldService{

    executeHelloWorldService(){
       return  axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService(){
        return  axios.get('http://localhost:8080/hello-world-bean')
     }

     executeHelloWorldPathVariableService(name){
         //tick is used instead of single quote
        return  axios.get(`http://localhost:8080/hello-world/${name}`)
     }

}

export default new HelloWorldService()