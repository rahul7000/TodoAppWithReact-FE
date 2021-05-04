import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: "rahrajpu",
            password: "dummy",
            showSuccessMessage: false,
            hasLoginFailed: false
        }

    }

    // handleUsernameChange=(event)=>{
    //     console.log(event.target.value)
    //     this.setState({userName:event.target.value})
    // }

    // handlePasswordChange=(event)=>{
    //     console.log(event.target.value)
    //     this.setState({password:event.target.value})
    // }

    handleChange = (event) => {
        //console.log([event.target.name]+" "+event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked = () => {
        // AuthenticationService.executeBasicAuthService(this.state.userName, this.state.password)
        //     .then(
        //         () => {
        //             AuthenticationService.registerSuccessfulLogin(this.state.userName, this.state.password)
        //             this.props.history.push(`/welcome/${this.state.userName}`)
        //         }
        //     )
        //     .catch(
        //         () => {
        //             this.setState({ showSuccessMessage: false })
        //             this.setState({ hasLoginFailed: true })
        //         }
        //     )

        AuthenticationService.executeJWTAuthService(this.state.userName, this.state.password)
            .then(
                (response) => {
                    AuthenticationService.registerSuccessfulLoginForJWT(this.state.userName, response.data.token)
                    this.props.history.push(`/welcome/${this.state.userName}`)
                }
            )
            .catch(
                () => {
                    this.setState({ showSuccessMessage: false })
                    this.setState({ hasLoginFailed: true })
                }
            )
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <InvalidCredential hasLoginFailed={this.state.hasLoginFailed} />
            <SuccessfullLogin showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Successfull Login</div>}
            User Name:<input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
            Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }
}

// function InvalidCredential(props) {
//     if(props.hasLoginFailed){
//         return(
//             <div>Invalid Credentials</div>
//         )     
//     }  else{
//        return( 
//        null
//        )
//     }  
//    }

//    function SuccessfullLogin(props) {
//     if(props.showSuccessMessage){
//         return(
//             <div>Successfull Login</div>
//         )     
//     }  else{
//        return( 
//        null
//        )
//     }  
//    }



export default Login;
