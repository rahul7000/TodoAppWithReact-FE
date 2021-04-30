import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class Welcome extends Component {
    
    constructor(props){
        super(props)
        this.state={
            welcomeMessage:"",
            isErrorResponse:false,
            errorMessage:"",
            errorCode:""
        }
    }

    render() {
        return (
            <>
                <h1> Hi {this.props.match.params.name} !!</h1>
                {this.state.isErrorResponse && <div className="alert alert-warning">StatusCode = {this.state.errorCode}, ErrorMessage = {this.state.errorMessage}</div>}
                <div className="container">
                    <p/>Welcome to TODO App, You can manage your todos from <Link to='/todos'>here</Link>
                </div>
                <div className="container">
                    <p/>Click here to get the welcome message
                    <button onClick={this.retrievedMesage} className="btn btn-success">Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        );
    }

    retrievedMesage=()=>{
        // HelloWorldService.executeHelloWorldService()
        // .then(response=>{this.handleSuccessfulResponse(response)})
        //.catch(error=>{this.handleError(error)})

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response=>{this.handleSuccessfulBeanResponse(response)})

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response=>{this.handleSuccessfulBeanResponse(response)})
        .catch(error=>{this.handleErrorResponse(error)})
    }

    handleSuccessfulResponse(response){
        console.log(response)
        this.setState({
            welcomeMessage:response.data
        })
    }

    handleSuccessfulBeanResponse(response){
        console.log(response)
        this.setState({
            welcomeMessage:response.data.message
        })
    }

    handleErrorResponse(error){
        console.log(error.response)
        this.setState({
            isErrorResponse:true,
            errorMessage:error.response.data.message,
            errorCode:error.response.data.status

        })
    }
}

export default Welcome;