
import {connect} from 'react-redux'
import React, { Component } from 'react'
import { addInputs, subtractInputs } from '../actions/calculatorActions'
//container
class Calculator extends Component {
  render() {
      let intA,intB
    return (
      <div className="container bg-info">
           <h2>Using React and Redux</h2>
           <div>Input1: 
               <input type="text" placeholder="0" ref="input1"/>
           </div>
           <div>Input2: 
               <input type="text" placeholder="0" ref="input2"/>
           </div>
           <div> Output:
               <input type='text' placeholder="0" readonly
                    ref="output" value={this.props.outputProps}/>
           </div>
          <div>
              <button className="btn btn-primary" 
                  onClick={ ()=>{
                      intA=parseInt(this.refs.input1.value)
                      intB=parseInt(this.refs.input2.value)
                      this.props.dispatch(addInputs(intA,intB))
                  }}>Add</button>

                   <button className="btn btn-primary" 
                  onClick={ ()=>{
                      intA=parseInt(this.refs.input1.value)
                      intB=parseInt(this.refs.input2.value)
                      this.props.dispatch(subtractInputs(intA,intB))
                  }}>Subtract</button>
          </div>
      </div>
    )
  }
}


const mapStateToProps= (state) =>({
    outputProps:state.output
})
export default connect(mapStateToProps)(Calculator)