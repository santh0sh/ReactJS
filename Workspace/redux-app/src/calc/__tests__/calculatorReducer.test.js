import calculatorReducer from '../reducers/calculatorReducer'
import {ADD,SUBTRACT} from '../actions/types'

describe("Test Calculator reducer",()=>{
    it('Add test', () => {
        let state={output:0}
        state=calculatorReducer(0,{type:ADD,payload:500})
        expect (state).toEqual({output:500})
    })

    it('Sub test', () => {
        let state={output:0}
        state=calculatorReducer(0,{type:SUBTRACT,payload:200})
        expect (state).toEqual({output:200})
    })
})
  
  

