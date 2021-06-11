import React, { Component } from 'react'
import FileBase64 from 'react-file-base64';

export default class TodoForm extends Component {
    state = {
        id: '',
        text: '',
        message: '',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
    }

    inputChange = (e) => {
        this.setState({text: e.target.value})
    }

    submitTodo = (e) => {
         e.preventDefault()
        if (this.state.id) {
           this.props.updateTodo(this.state)
           this.setState({id:'', text: '', message: '', image: ''})
        } else {
            this.props.addTodo(this.state.text, this.state.message, this.state.image || 'https://www.w3schools.com/howto/img_avatar.png')
            this.setState({id:'', text: '', message: '', image: 'https://www.w3schools.com/howto/img_avatar.png'})
        }
    }

    componentDidUpdate(prevState) {
        if (this.props?.data && prevState.data.id !== this.props.data.id) {
            let {id, text, message, image} = this.props.data
            this.setState({id,text,message,image})
        }
    }
    render() {
         return (
           <>
            <div className = "form" key = "120142" >
                <form className='todo-form' onSubmit = {(e) => this.submitTodo(e)}>
                    { this.state.id ? <h2>Update Todo</h2> :  <h2>Create Todo</h2> }

                                <label> Name:   </label>
                                <input 
                                    className='todo-input '
                                    type="text"
                                    value = { this.state.text}
                                    onChange = {this.inputChange}
                                    required
                                />
                             
                                <label> Summary:   </label>
                                 <textarea 
                                   className="todo-textarea" 
                                   value = { this.state.message}
                                       onChange ={(e) => {
                                              this.setState({message:e.target.value})
                                           }
                                        } 
                                     required   
                                 />
                            <span className= "inputFile">
                             <FileBase64
                                  className= "inputFile"
                                  multiple={ false }
                                  onDone={ ({base64}) => { this.setState({image:  base64})} } 
                                />
                            </span>
                               
                                  <button className="todo-button">add</button>
                            </form> 
                        </div>  
             </>
         )}
}
