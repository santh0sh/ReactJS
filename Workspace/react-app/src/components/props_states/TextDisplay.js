import React, { Component } from 'react'

export default class TextDisplay extends Component {
  render() {
    let customStyle={
      fontSize:20,
      color:'blue',
      background:'yellow'


    }
    return (
      <div className="bg-warning">
        <h6 style={customStyle}> Welcome : {this.props.textProp}</h6>
      </div>
    )
  }
}
