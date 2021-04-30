import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class TodoList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: [
                // {id:1,description:'Learn',done:false,targetDate:new Date()},
                // {id:2,description:'Play',done:false,targetDate:new Date()},
                // {id:3,description:'Study',done:false,targetDate:new Date()}
            ],
            deleteMessage: null
        }
    }

    componentDidMount() {

        let userName = AuthenticationService.loggedInUserName();

        //console.log(userName)
        TodoDataService.retrieveAllTodos(userName)
            .then(response => {
                console.log(response)

                this.setState({
                    todos: response.data
                })
            })

    }

    refreshPage = () => {
        let userName = AuthenticationService.loggedInUserName();

        //console.log(userName)
        TodoDataService.retrieveAllTodos(userName)
            .then(response => {
                console.log(response)

                this.setState({
                    todos: response.data
                })
            })
    }

    deleteByid = (id) => {
        let userName = AuthenticationService.loggedInUserName();

        //console.log(userName)
        TodoDataService.deleteTodo(userName, id)
            .then(response => {
                this.setState({
                    deleteMessage: `Todo with id=${id} deleted`
                })
                this.refreshPage()
            })
    }

    updateById = (id) => {

        this.props.history.push(`/todos/${id}`)
    }

    addTodo = () => {
        this.props.history.push(`/todos/-1`)
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                {this.state.deleteMessage && <div className="alert alert-success">{this.state.deleteMessage}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Done Status</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <th>{todo.id}</th>
                                            <th>{todo.description}</th>
                                            <th>{todo.done.toString()}</th>
                                            <th>{moment(todo.targetDate).format("YYYY-MM-DD")}</th>
                                            <th><button className="btn btn-success" onClick={() => this.updateById(todo.id)}>Update</button></th>
                                            <th><button className="btn btn-warning" onClick={() => this.deleteByid(todo.id)}>Delete</button></th>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodo}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;