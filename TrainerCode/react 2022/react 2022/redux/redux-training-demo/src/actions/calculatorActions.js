import {ADD_INPUTS, SUBTRACT_INPUTS} from './types'

export const addInputs=(input1,input2)=>{
    //logic here , axios. get/post/put/delete here
    //thunk here with acync dispatch
    let output=input1+input2

    return { type: ADD_INPUTS, payload: output }
}


export const subtractInputs = (input1, input2) => {
    //logic here , axios. get/post/put/delete here
    //thunk here with acync dispatch
    let output = input1 - input2
    
    return { type: SUBTRACT_INPUTS, payload: output }
}