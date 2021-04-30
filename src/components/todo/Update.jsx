import React, { Component } from 'react';
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js';

class Update extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }

    componentDidMount() {
        let userName = AuthenticationService.loggedInUserName()

        if (this.state.id == -1) {
            console.log(this.state.id)
            return
        }else{
        TodoDataService.retrieveTodo(userName, this.state.id)
            .then(
                response => {

                    this.setState({
                        description: response.data.description,
                        targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                    })
                }
            )
        }
    }

    validate = (values) => {
        let errors = {}

        if (!values.description) {
            errors.description = "Enter the description"
        } else if (values.description.length < 5) {
            errors.description = "Enter the description with more then 5 characters"
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid date"
        }

        return errors

    }

    onSubmit = (values) => {
        let userName = AuthenticationService.loggedInUserName()
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            TodoDataService.createTodo(userName, todo)
                .then(() => {
                    this.props.history.push("/todos")
                })
        } else {
            // TodoDataService.updateTodo(userName,this.state.id,values)
            TodoDataService.updateTodo(userName, this.state.id, todo)
                .then(() => {
                    this.props.history.push("/todos")
                })
        }
    }

    render() {

        //let description = this.state.description
        //let targetDate = this.state.targetDate shorthand is in below line

        let { description, targetDate } = this.state

        return (
            <div>
                <h1>Todo Update</h1>
                <div className="container">
                    {/*<Formik initialValues={{description:description,targetDate:targetDate}}> shorthand is like below line*/}
                    <Formik
                        initialValues={{ description, targetDate }}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnBlur={false}
                        validateOnChange={false}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage className="alert alert-warning" name="description" component="div" />
                                    <ErrorMessage className="alert alert-warning" name="targetDate" component="div" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>TargetDate</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}

export default Update;