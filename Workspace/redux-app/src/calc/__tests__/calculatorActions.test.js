import {addInputs,subtractInputs} from '../actions/calculatorActions'
import {ADD,SUBTRACT} from '../actions/types'


describe("Test ACTIONS",()=>{
    it('Add inputs test', () => {
        const addResult=addInputs(10,5)
        expect (addResult).toEqual({type:ADD,payload:15})
    })

    it('Add inputs test', () => {
        const result=subtractInputs(10,5)
        expect (result).toEqual({type:SUBTRACT,payload:5})
    })
})