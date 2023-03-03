import { ADD_INPUTS, SUBTRACT_INPUTS } from "./types"

export const addInputs=(input1,input2) =>{
//axios logic to make ajax calls to REST API with thunk
//logging/ profiling/caching....business/  math. logic
let result=input1+input2
return {
    type:ADD_INPUTS, payload:result
}
}

export const subtractInputs=(input1,input2) =>{    
    let result=input1-input2
return {
    type:SUBTRACT_INPUTS, payload:result
}
}







