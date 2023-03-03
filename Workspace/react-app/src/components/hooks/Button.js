/*
import React, { Component } from 'react'

export default class Button extends Component {
  state={buttonText:'Click Me'}
  handleClick=()=>{
    this.setState({buttonText:'Button Click event Triggered'})
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
      </div>
    )

}
}
*/
import React,{useState} from 'react'

export default function Button() {
    const[buttonText,setButtonText] = useState('Click Me')
    //const[customers,setCustomers]= useState([])
    function handleClick(){
        setButtonText('Button Click event Triggered')
        //fetchAPI - REST API Call
      }
    return(
        <>
            <div>
                <button onClick={handleClick}>{buttonText}</button>
            </div>
        </>
    )
}