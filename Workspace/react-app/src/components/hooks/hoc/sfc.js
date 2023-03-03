import React, { Component } from 'react'
import withIncrement from './withIncrement'
/*
 class ButtonComponent extends Component {
  render() {
    const {countProp,incrementProp} = this.props
    return (
      <div>
        <button className='btn btn-success'
        onClick={incrementProp}
        >Clicked {countProp} times</button>
      </div>
    )
  }
}*/

function ButtonComponent(props){
    return (
    <div>
    <button className='btn btn-success'
    onClick={props.incrementProp}
    >Clicked {props.countProp} times</button>
  </div>
)
} 

export default withIncrement(ButtonComponent)
