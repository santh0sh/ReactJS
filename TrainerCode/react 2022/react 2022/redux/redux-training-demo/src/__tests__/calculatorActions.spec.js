import {ADD_INPUTS, SUBTRACT_INPUTS} from '../actions/types'

import {addInputs,subtractInputs} from '../action/calcualtorActions'

describe ('Test CalcualtorActions',()=>{
    it('Action for add',()=>{
        const add=addInputs(10,20)  //30
        expect(add).toEqual({type: ADD_INPUTS,payload:30})
    })

    it('Action for subract', () => {
        const value = subtractInputs(40, 20)  
        expect(value).toEqual({ type: SUBTRACT_INPUTS, payload: 20 })
    })
})
