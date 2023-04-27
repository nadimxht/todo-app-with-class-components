import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
export default class TodoList extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div>
         {
        this.props.todos.map(e=>(
          
          <Modal.Dialog style={{cursor:"pointer"}} onDoubleClick={()=>this.props.test.setState({todos:this.props.items.map(el=>el.id==e.id ? {...el , checked: !el.checked} : el  )})} >
          <Modal.Header onHide={()=>this.props.test.setState({todos:this.props.items.filter(el=>el.id!==e.id)})}  closeButton>
          <div >
           <p style={{textDecoration:e.checked?"line-through" : "none"}}>
            {e.description}
          </p>
          
          
          </div>
          </Modal.Header>
          </Modal.Dialog>
          
        
        ))
       }
      </div>
    )
  }
}
