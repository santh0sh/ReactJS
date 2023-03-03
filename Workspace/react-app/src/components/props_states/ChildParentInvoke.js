import React, { Component } from 'react'

//Parent 
export default class ChildParentInvoke extends Component {
    state={data:'Initial state'}

    updateState(event){
        this.setState({data:event.target.value})
    }

  render() {
    return (
      <div className='bg-warning'>
        <h1 className="text-success">Parent Component</h1>
        <h2>{this.state.data}</h2>
        <br/>
        <h3 className="text-danger">Child Component</h3>
        <Content dataProp={this.state.data} 
           updateStateProp={(event)=> this.updateState(event)}/>

        <ContentSibling dataProp={this.state.data}></ContentSibling>
      </div>
    )
  }
}
//------------------------------------
//presentation
const Content = (props)=>{
    return (
        <div> 
            Data: <input type="text" value={props.dataProp} 
            onChange={ props.updateStateProp }/>
        </div>
    )

}
//----------------------
const ContentSibling = (props)=>{
     return (
        <div className="bg-dark text-warning">
            <h2>{props.dataProp}</h2>
        </div>
     )
}