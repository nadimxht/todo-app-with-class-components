import React, { Component } from 'react'
import AddTodo from './components/AddTodo';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      todos:[]
    }
  }
  render() {
    return (
      <div>
       <AddTodo Add={this} todos={this.state.todos} />
       {
        this.state.todos.map(e=>(
          <div>
           <p style={{textDecoration:e.checked?"line-through" : "none"}}>
            {e.description}
          </p>
          <button onClick={()=>this.setState({todos:this.state.todos.filter(el=>el.id!==e.id)})} >Delete</button>
          <button onClick={()=>this.setState({todos:this.state.todos.map(el=>el.id==e.id ? {...el , checked: !el.checked} : el  )})} >Check</button>
          </div>
        
        ))
       }
      </div>
    )
  }
}


