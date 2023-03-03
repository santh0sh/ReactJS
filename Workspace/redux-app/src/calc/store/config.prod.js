import { legacy_createStore as createStore } from "redux"


import calculatorReducer from '../reducers/calculatorReducer'

export const store=createStore(calculatorReducer)
  