import React, { Component } from 'react'
import AddTodo from './components/AddTodo';

import TodoList from './components/TodoList';
export default class App extends Component {
  constructor(){
    super();
    this.state={
      todos:[],
      checkedTodos:[],
      filter:false
    }
  }
  render() {
    return (
      <div>
       <AddTodo Add={this} todos={this.state.todos} />
      <TodoList test={this} items={this.state.todos} todos={this.state.filter ?  this.state.checkedTodos :this.state.todos } />
       <button onClick={()=>this.setState({todos:[]})}>
        clear all
       </button>
       <button onClick={()=>{this.setState({checkedTodos:this.state.todos.filter(e=>e.checked)}),this.setState({filter:!this.state.filter})}}>
        {this.state.filter?"show all":"checked"}
       </button>

      </div>
    )
  }
}


