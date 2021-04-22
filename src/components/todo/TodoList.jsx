import React, { Component } from 'react';

class TodoList extends Component {

    constructor(props){
        super(props)
        this.state={
            todos:[
                {id:1,description:'Learn',done:false,targetDate:new Date()},
                {id:2,description:'Play',done:false,targetDate:new Date()},
                {id:3,description:'Study',done:false,targetDate:new Date()}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Done Status</th>
                            <th>Target Date</th>
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
                                    <th>{todo.targetDate.toString()}</th>
                                </tr>
                        ) 
                    }
                    </tbody>
                </table> 
                </div>           
            </div>
        );
    }
}

export default TodoList;