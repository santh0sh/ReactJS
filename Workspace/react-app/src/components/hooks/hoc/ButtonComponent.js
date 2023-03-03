import React, { Component } from 'react'
import withIncrement from './withincrement'

class ButtonComponent extends Component {
  render() {
    //const 
    const {countProp,incrementProp}=this.props
    return (
      <div>
        <button className='btn btn-success' onClick={incrementProp}> Clicked  {countProp} </button>
      </div>
    )
  }
}

export default withIncrement(ButtonComponent)