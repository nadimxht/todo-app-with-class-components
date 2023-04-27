import React, { Component } from 'react'

export default class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            TodoValue:""
        }
    }
  render() {
    return (
      <div>
        <input type='text' value={this.state.TodoValue} onChange={(event)=>this.setState({TodoValue:event.target.value})} />
        <button onClick={()=>{this.props.Add.setState({todos:[...this.props.todos,{id:Date.now() , description:this.state.TodoValue , checked:false}]}); this.setState({TodoValue:""})}}>Add todo</button>
        
      </div>
    )
  }
}
