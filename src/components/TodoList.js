import React, { Component } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
export default class TodoList extends Component {
    state = {
        todos: [{
          id: 1,
          text: "todo 1",
          message: "message 1",
          image: "https://www.w3schools.com/howto/img_avatar.png"
        }, {
          id: 2,
          text: "todo 2",
          message: 'message 2',
          image: "https://www.w3schools.com/howto/img_avatar.png"
        }, {
          id: 3,
          text: "todo 3",
          message: 'message 3',
          image: "https://www.w3schools.com/howto/img_avatar.png"
        },{
            id: 4,
            text: "todo 4",
            message: 'message 4',
            image: "https://www.w3schools.com/howto/img_avatar.png"
          },{
            id: 5,
            text: "todo 5",
            message: 'message 5',
            image: "https://www.w3schools.com/howto/img_avatar.png"
          },{
            id: 6,
            text: "todo 6",
            message: 'message 6',
            image: "https://www.w3schools.com/howto/img_avatar.png"
          },{
            id: 7,
            text: "todo 7",
            message: 'message 7 ',
            image: "https://www.w3schools.com/howto/img_avatar.png"
          }],
          data: {

          }
      }

      addTodo = (text, message, image) =>{
           this.setState({
               todos: [...this.state.todos, {
                   id: Math.floor( Math.random() * 1000 ) + 1,
                   text,
                   message,
                   image
               }]
           })
      }
    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    updateTodo = (data) => {
      console.log(data)
      this.setState({
            todos: this.state.todos.filter(todo =>{ 
              if (todo.id === data.id)  { 
                todo.text = data.text
                todo.message = data.message  
                todo.image = data.image
              } 
              return  todo; 
            })
        })  
    }

    editTodo = (id, text, message, image) => {
       this.setState({
           data: {
              id, text, message, image
           }
       })
    }

    render() {
        return (
            <>
          <TodoForm addTodo = {this.addTodo} updateTodo = {this.updateTodo} data = {this.state.data}/>

         <div className="container" key="dfsdfsd">
                  {this.state.todos.map((todo) => {
                     return (
                       <TodoItem 
                           todo={todo}
                           removeTodo={this.removeTodo}
                           updateTodo = {this.updateTodo}
                           editTodo = {this.editTodo}
                       />
                    )
                 })}
         </div>
            </>
        )
    }
}
