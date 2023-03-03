import React, { Component } from 'react'

//container/parent
export default class ChildParentInvoke extends Component {
  state={data:'initital data'}

  updateState(event){
   this.setState({data:event.target.value})
  }
//cart=[]
//addtoCart(), removeCart(),getCartInfo()

  render() {
    return (
      <div>
          <h1 className="text-success">Parent component</h1>
          <h2>{this.state.data}</h2>
          <br/>
          <h2>Child Component</h2>
          <Content dataProp={this.state.data}
                   updateStateProp={(event)=>this.updateState(event)}>
          </Content>

          <ContentSibling data={this.state.data}></ContentSibling>
      </div>
    )
  }
}

const Content =(props)=>{
    return (
        <div>
            <input type="text"  value={props.dataProp}
                onChange={props.updateStateProp} id="txt1"/>                 
        </div>
    )
}

const ContentSibling = (props)=>{
    return (
        <div className="bg-success">
            <h2>{props.data}</h2>
        </div>
    )
}