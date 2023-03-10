import React from "react"
// npm install redux --save
// npm install react-redux 

import {bindActionCreators} from 'redux';

import {connect} from 'react-redux'
import {addInputs, subtractInputs} 
          from '../actions/calculatorActions'
import { ADD_INPUTS } from "../actions/types";



export class Home extends React.Component{
	render(){
		let intA,intB

		return(
			<div className="container">
				<h2>using React and Redux</h2>
				 
				<div>Input 1: 
					<input type="text" placeholder="0" ref="input1"></input>
				</div>
				<div>Input 2 :
					<input type="text" placeholder="0" ref="input2"></input>
				</div>
				<div>Output :
					<input type="text" placeholder="0" readOnly 
					   ref="output" value={this.props.output}></input>
				</div>
				<div>
					<button id="add" onClick={ () => {
						intA = parseInt(this.refs.input1.value)
						intB = parseInt(this.refs.input2.value)
						this.props.dispatch(addInputs(intA,intB))
					
					}
					}>Add</button>
					
					<button id="subtract" onClick={ () => {
						intA = parseInt(this.refs.input1.value)
						intB = parseInt(this.refs.input2.value)						
         				this.props.dispatch(subtractInputs(intA,intB))
					  }
					}>Subtract</button>
				</div>				
				<hr/>
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
	output:state.output
  })

  function mapDispatchToProps(dispatch){
	// pass prop selectTrainer with action selectTrainer
   return bindActionCreators({add:addInputs},dispatch);
 }



export default connect(mapStateToProps,mapDispatchToProps)(Home)