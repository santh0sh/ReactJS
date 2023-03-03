import React, { Component } from 'react'
//container
export default class Heading extends Component {
  constructor(props){
    super(props)
    this.state={username:'Murthy'}
  }
  render() { // life cycle method 
    return (
      <div>
          <h1 className="bg-info text-center">
              SPA Training for {this.props.company}
         </h1>       
     </div>
    )
  }
}

Heading.defaultProps = {
    company:"Murthy Infotek"
}
