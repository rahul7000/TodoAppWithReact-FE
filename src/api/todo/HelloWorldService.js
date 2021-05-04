//const { default: axios } = require("axios");
import axios from 'axios'
import {API_URL} from '../../Constants.js'

class HelloWorldService {

   executeHelloWorldService() {
      return axios.get(`${API_URL}/hello-world`)
   }

   executeHelloWorldBeanService() {
      return axios.get(`${API_URL}/hello-world-bean`)
   }

   executeHelloWorldPathVariableService(name) {

      var url = `${API_URL}/hello-world/${name}`
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