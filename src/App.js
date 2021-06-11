import React, { Component } from 'react'
import './App.css';
import TodoList from './components/TodoList'

export default class App extends Component {
    
  render() {
    return (
      <>
      <h1>Todo App</h1>
      <div className="App">
         <TodoList/>
      </div>
      </>
    )
  }
}

