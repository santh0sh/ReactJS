import calculatorReducer from '../reducers/calculatorReducer'
import {ADD_INPUTS, SUBTRACT_INPUTS} from '../actions/types'

describe(' Test calculator reducers',()=>{
    it('Reducer for ADD_INPUT',()=>{
         let state={output:0}
         state=calculatorReducer(0,{type:ADD_INPUTS,payload:500})
         expect(state).toEqual({output:500})
    })

    it('Reducer for SUBTRACT_INPUT', () => {
        let state = { output: 0 }
        state = calculatorReducer(0, { type: SUBTRACT_INPUTS, payload: 0 })
        expect(state).toEqual({ output: 0 })
    })


})