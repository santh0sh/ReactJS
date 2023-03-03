import React, { Component } from 'react'
import {connect} from 'react-redux'
//npm install react-redux

import {addInputs,subtractInputs} from '../actions/calculatorActions'

export default class Home extends Component {
    render() {
        let intA, intB

        return (
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
                    <button id="add" onClick={() => {
                        intA = parseInt(this.refs.input1.value)
                        intB = parseInt(this.refs.input2.value)
                        this.props.dispatch(addInputs(intA, intB))

                    }
                    }>Add</button>

                    <button id="subtract" onClick={() => {
                        intA = parseInt(this.refs.input1.value)
                        intB = parseInt(this.refs.input2.value)
                        this.props.dispatch(subtractInputs(intA, intB))
                    }
                    }>Subtract</button>
                </div>
                <hr />
            </div>
        );
    }
}

const mapStateToProps= (state )=>({ 
    output:state.output
})

export default connect(mapStateToProps)(Home)
