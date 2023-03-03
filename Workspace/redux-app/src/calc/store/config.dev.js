import { applyMiddleware, legacy_createStore as createStore } from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from "redux-logger"

import calculatorReducer from '../reducers/calculatorReducer'
export const store=createStore(calculatorReducer,
       composeWithDevTools(applyMiddleware(logger))
     )

store.subscribe( ()=>console.log(store.getState()))