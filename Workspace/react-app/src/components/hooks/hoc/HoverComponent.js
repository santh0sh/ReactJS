import React, { Component } from 'react'
import withIncrement from './withincrement'

class HoverComponent extends Component {
  render() {
    //const 
    const {countProp,incrementProp}=this.props
    return (
      <div>
        <h2 className='bg-warning' onMouseOver={incrementProp}> Mouse on top of me for {countProp}</h2>
      </div>
    )
  }
}

export default withIncrement(HoverComponent)