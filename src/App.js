import React, { Component } from 'react';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import './App.css';

import Header from './components/Header'
import Form from './components/Form'

const initialState = {
  text: ''
}

const rootReducer = (state = initialState, action) => {
  return state
}

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <Header />
            <Form />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
