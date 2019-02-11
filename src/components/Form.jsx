import React, { Component } from 'react'
import axios from 'axios'

import Main from './Main'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            todoLists: ['Hello'],
            todoData: {},
        }

        this.changeInputValue = this.changeInputValue.bind(this)
        this.addNewToDo = this.addNewToDo.bind(this)
        this.getData = this.getData.bind(this)
        this.setData = this.setData.bind(this)
    }

    getData(url) {
        const __baseurl = 'http://localhost:5000'
        axios.get(`${__baseurl}${url}`).then(response => {

            const { todos } = response.data
            this.setState({
                todoData: todos
            })
            console.log(this.state.todoData);
        }).catch(error => {
            console.log(error);
        })
    }

    setData(url, text) {
        const __baseurl = 'http://localhost:5000'
        axios.post(`${__baseurl}${url}`, {
            text
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    componentDidMount() {
        this.getData('/api/todos')
    }

    changeInputValue(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    addNewToDo(event) {
        event.preventDefault()
        if (!this.state.inputValue) {
            alert('Please write ToDo!')
            return
        }

        const { inputValue } = this.state
        this.setData('/api/add-item', inputValue)

        this.setState({
            inputValue: '',
            //todoLists: todoLists.concat(inputValue)
        })
    }

    render() {
        console.log('re-rendr')
        const { inputValue, todoData } = this.state
        return (
            <>
                <div>
                    <input type='text' onChange={this.changeInputValue} value={inputValue} placeholder='New todo' />
                    <button type='submit' onClick={this.addNewToDo}>ADD</button>
                </div>
                <Main todoLists={todoData} />
            </>
        )
    }
}