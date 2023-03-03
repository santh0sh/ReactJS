import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

export default class TextInput extends Component {
  state ={inputText:'Sandy'}
  
  handleChange(event){
    this.setState({inputText:event.target.value})
  }

  render() {
    return (
      <div className='bg-info'>
        Info:<input type='text' id='info'/> //html form control
        <br/>
        Company:<input type='text' id='company' value="BOA"/> //Uncontrolled Component
        <br/>
        Emp Name:<input type='text' id='employeeName' value={this.state.inputText} 
        onChange={(event)=>this.handleChange(event)}/> //Controlled component
        {this.state.inputText?console.log('valid'):console.log('login required')}

        {this.state.inputText 
            ? <TextDisplay textProp={this.state.inputText}/>
            : <TextDisplay textProp="Login Required !!"/>
        }
      </div>
    )
  }
}
