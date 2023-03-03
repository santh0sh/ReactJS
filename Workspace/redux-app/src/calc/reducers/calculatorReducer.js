import {ADD,SUBTRACT} from '../actions/types'

export const initialState={ output:0}


const calculatorReducer=function(state=initialState,action){
    switch(action.type){
        case ADD:
            return{...state,output:action.payload}
        case SUBTRACT:
            return{...state,output:action.payload}
        default:return state
    }    
  }

export default calculatorReducer