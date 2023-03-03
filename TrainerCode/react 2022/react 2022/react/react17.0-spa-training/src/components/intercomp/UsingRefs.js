import React, { Component } from 'react'

export default class UsingRefs extends Component {
  
    state={data:'React'}
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }


    updateState(e){
       this.setState({data:e.target.value})
    }
    clearInput(){
        alert(this.refs.myData.value) 
        this.setState({data:'Murthy'})
        //this.refs.pwd.focus()   
        this.inputRef.current.focus() 
    }
    

  render() {
    return (
      <>
      userName: <input type="text" value={this.state.data}
               onChange={ (e)=>this.updateState(e)} 
               id="txt1"  ref="myData"/>
    <br/>
     Password: <input type="password" ref="pwd" id="pwd1"/>
     <button className="btn-primary" onClick={ ()=>this.clearInput()}>CLEAR</button>
            <h3>name: {this.state.data}</h3>      

    mail: <input type="text" ref={this.inputRef}/>
      </>
    )
  }
}
