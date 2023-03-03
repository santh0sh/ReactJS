import React, { Component } from 'react'

//container
export default class CompLifeCycle extends Component {
   constructor(props){
       super(props)
       this.state={data:0, msg:'initial data'}
   }
   updateState(e){
       this.setState({data:this.state.data+1})
   }
    render() {
    return (
      <div>
            <button onClick={ (e)=>this.updateState(e)}>Increment</button>
            <Child myNumber={this.state.data}></Child>
      </div>
    )
  }
}

//child
class Child extends Component {
    //1. initialisation
    constructor(props){
        super(props)
        this.state={name:'Murthy'}
        console.log('In constructor in Child : ',props.myNumber) 
    }

  render() {
    return (
      <div>
          Couter: <h3 id="txt1">{this.props.myNumber}</h3>
          <div id="txtname">Hello BOA!</div>
      </div>
    )
  }


  componentDidMount() {
      console.log('Child component mounted on VDOM :',this.props.myNumber)
      //ajax call using props.searchitem and set state so that again render method
      //inititalize data by fetcching from REST API   fetch/axios
      // subscribe web sockets, apploclient register here       
  }
  static getDerivedStateFromProps(props,state) {
      //called everytime when state/props changes
      //validtion of props/state, ajax calls with props.searchItem for live data
      console.log('in gDSFP : '+props.myNumber)
      console.log(' name : '+state.name)
      //ajax call to customers and http response axios/fetch
      return {address:'Hyderabad',mail:'murthy@gmail.com'}
  }

  shouldComponentUpdate(props,state){
      //this is invoked every time whenver state/props changes
      //weather to render or not based on condition
      console.log('in SCU :'+state.name+'-'+state.address+ '-'+state.mail)
      if ( props.myNumber>5)
           return true
      else
          return false
  }
   componentDidCatch(error){
       // we log error in db by making ajax call with REST API by passing error
       console.log("some error occured"+error)
   }
   componentDidUpdate(){
       // real DOM available so use javasccript or jquery to manipulate DOM
       console.log(document.getElementById("txtname").innerText)
       //fired every time when state changes UI logic
   }
   componentWillUnmount(){
       // fired only - avoid memory leak by unsubscribing web socket/events/rxjs
       //clear the cache/clean
       console.log("Child component unmounted from VDOM")
   }


}

