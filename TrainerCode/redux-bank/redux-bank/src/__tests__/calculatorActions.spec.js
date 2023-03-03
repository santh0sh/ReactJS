import {addInputs,subtractInputs} from '../actions/calculatorActions'
import { ADD_INPUTS, SUBTRACT_INPUTS } from '../actions/types'

describe('Test Calculator actions', ()=>{
  it ('Action Creator for addInputs',()=>{
      const add=addInputs(10,20)
      expect(add).toEqual({type:ADD_INPUTS,payload:30})
  })

  it ('Action Creator for subtractInputs',()=>{
    const sub=subtractInputs(30,20)
    expect(sub).toEqual({type:SUBTRACT_INPUTS,payload:10})
})
})