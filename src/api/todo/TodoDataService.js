import axios from 'axios'
import {API_URL} from '../../Constants.js'

class TodoDataService {

    retrieveAllTodos(userName) {
        return axios.get(`${API_URL}/users/${userName}/todos`)
    }

    retrieveTodo(userName, todoId) {
        return axios.get(`${API_URL}/users/${userName}/todos/${todoId}`)
    }

    deleteTodo(userName, todoId) {
        return axios.delete(`${API_URL}/users/${userName}/todos/${todoId}`)
    }

    updateTodo(userName, todoId, todo) {
        return axios.put(`${API_URL}/users/${userName}/todos/${todoId}`, todo)
    }

    createTodo(userName, todo) {
        return axios.post(`${API_URL}/users/${userName}/todos`, todo)
    }
}

export default new TodoDataService()