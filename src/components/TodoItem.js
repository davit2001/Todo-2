import React, { Component } from 'react'
import { MdEdit } from 'react-icons/md'

export default class TodoItem extends Component {
   
 editTodo = () => {
       let {id, text, message, image} = this.props.todo
        this.props.editTodo(id, text, message, image)
   }

    render() {
      return (
            <>
             <div className="card"  key = {this.props.todo.id}>
                 <img width = "50px" height="50px" src = {this.props.todo.image}/>
                 <span className= "editIcon">
                     <MdEdit onClick = { this.editTodo} 
                    />
                </span>
             <div className = "icon"  >
                <h3>{this.props.todo.text} </h3>
                <p className ="small">{this.props.todo.message}</p>
                </div>
                
            </div>
          </>
        )
    }
}
