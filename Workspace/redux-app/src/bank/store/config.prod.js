import { legacy_createStore as createStore } from "redux"


import bankReducer from '../reducers/bankReducer'

export const store=createStore(bankReducer)
  