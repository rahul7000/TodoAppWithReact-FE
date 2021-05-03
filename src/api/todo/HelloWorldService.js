//const { default: axios } = require("axios");
import axios from 'axios'

class HelloWorldService {

   executeHelloWorldService() {
      return axios.get('http://localhost:8080/hello-world')
   }

   executeHelloWorldBeanService() {
      return axios.get('http://localhost:8080/hello-world-bean')
   }

   executeHelloWorldPathVariableService(name) {

      var url = `http://localhost:8080/hello-world/${name}`
      //implemented using interceptor in AuthenricationService
      //    let username = 'rahrajpu'
      //    let password = 'dummy'

      //    let basicAuth = 'Basic ' + window.btoa(username + ":" + password)

      //    var config = {
      //       "headers": {
      //           "Authorization": basicAuth
      //       }
      //   };

      //tick is used instead of single quote
      return axios.get(url);
   }

}

export default new HelloWorldService()