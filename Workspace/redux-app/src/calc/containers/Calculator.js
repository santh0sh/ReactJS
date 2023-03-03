import React,{useRef} from 'react'
import {connect} from 'react-redux'
import { addInputs,subtractInputs } from '../actions/calculatorActions'

const Calculator = (props) => {
    const input1=useRef()
    const input2=useRef()
    const result=useRef()
    
    let intA,intB

    return (
        <div className='container bg-info'>
            <h1>Simple Calculator</h1>
            <div>
                Input1 :
                <input type="number" placeholder='0' ref={input1} id="txt1"/>
            </div>
            <div>
                Input2 :
                <input type="number" placeholder='0' ref={input2} id="txt2"/>
            </div>
            <div>
                Result :
                <input type="number" placeholder='0' ref={result} id="txt3"  readonly value={props.outputProp}/>
            </div>
            <div>
                <button onClick={()=>{
                    intA = parseInt(input1.current.value)
                    intB = parseInt(input2.current.value)
                    props.dispatch(addInputs(intA,intB))
                }}>Add</button>
                <button onClick={()=>{
                    intA = parseInt(input1.current.value)
                    intB = parseInt(input2.current.value)
                    props.dispatch(subtractInputs(intA,intB))
                }}>SUBTRACT</button>
                <button onClick={()=>{
                    input1.current.value = ''
                    input2.current.value = ''
                    result.current.value = ''
                }}>Clear</button>
            </div>
        </div>
    )

}

const mapStateToProps=(state)=>({
    outputProp:state.output
})

export default connect(mapStateToProps)(Calculator)