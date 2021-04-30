import React, { Component } from 'react';
import Login from './Login'
import Welcome from './Welcome'
import Error from './Error'
import TodoList from './TodoList'
import Header from './Header'
import Footer from './Footer'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Logout from './Logout'
import Update from './Update'
import AuthenticatedRoute from './AuthenticatedRoute'

class TodoApp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <>
                    <Header/>
                    <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/login" exact component={Login}/>
                    <AuthenticatedRoute exact path="/welcome/:name" component={Welcome}/>
                    <AuthenticatedRoute path="/todos/:id" component={Update}/>
                    <AuthenticatedRoute path="/todos" component={TodoList}/>
                    <AuthenticatedRoute path="/logout" component={Logout}/>
                    <Route  component={Error}/>
                    </Switch>
                    <Footer/>
                    </>
                </Router>
            </div>
        );
    }
}

export default TodoApp;