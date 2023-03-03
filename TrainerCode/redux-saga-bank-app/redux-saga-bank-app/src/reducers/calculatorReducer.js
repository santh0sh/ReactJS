
import {ADD_INPUTS,SUBTRACT_INPUTS} from '../actions/types'
const intitalState={output:0}
const calculatorReducer=(state=intitalState,action)=>{
  switch (action.type){
      case ADD_INPUTS:
          return {...state,output:action.payload}
      case SUBTRACT_INPUTS:
          return {...state,output:action.payload}
        default:return {...state}
  }
}
export default calculatorReducer