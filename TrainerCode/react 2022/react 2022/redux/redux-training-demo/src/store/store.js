import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

import calculatorReducer from '../reducers/calculatorReducer'

export const store=createStore(calculatorReducer,
       composeWithDevTools(applyMiddleware(logger)))



