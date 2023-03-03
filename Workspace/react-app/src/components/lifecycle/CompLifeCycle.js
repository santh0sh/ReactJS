import React, { Component } from 'react'

export default class CompLifeCycle extends Component {
    state={data:0,msg:'Learning Lifecycle'}
    updateState(e){
        this.setState({data:this.state.data+1})
    }
  render() {
    return (
      <div className="bg-info">
        <h2>Parent Component</h2>
        <button onClick={(e)=>this.updateState(e)}>Increment </button>
        <Child dataProp={this.state.data}></Child>
      </div>
    )
  }
}
//======================================================
//child
class Child extends Component {
    //1. constructor
    constructor(props){
        super(props)
        this.state={name:'Sandy'}
        console.log(` In Constructor of Child : ${props.dataProp}`)// 0
        
    }
 
    //2.render
  render() {
    return (
      <div className="bg-warning">
        Counter:<h3 id='txt'>{this.props.dataProp}</h3>     
        <h3>{this.state.address} - {this.state.mail}</h3>       
      </div>
    )
  }
  //3. CDM
  componentDidMount(){
    //it is fired only once. subscribe to web sockets/RXJS obsevables here
    //load data from REST API with AJAX calls(fetch(url+this.props.dataProp))
    //this.setState({data:response.data})
    console.log(`in CDM: ${this.props.dataProp}`)
  }
  //4. gDSFP
  static getDerivedStateFromProps(props,state){
    //called everytime when state/props changes / do validations
    //make ajax calls for live data - this.setState(data:response.results)
    console.log(`In gDSFP : ${props.dataProp} -${ state.name} `)
    return {address:'Madras',mail:'sandy@gmail.com'}
  }
  //5:
  shouldComponentUpdate(props,state){
    //this is fired only once, render or not
    console.log(` in SCU:${state.name}- ${state.address}`)
    if (props.dataProp>5)
         return true
    else
         return false
  }
  componentDidUpdate(){
    console.log(document.getElementById("txt").innerText)
    
    //ui logic
  }
  componentWillUnmount(){
    //fired only once - clean up of data/unsubscribe to events,web sockets,rx observable
    console.log("Child component unmouted")
  }
}

