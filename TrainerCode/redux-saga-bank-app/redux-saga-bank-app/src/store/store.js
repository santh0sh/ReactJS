import { applyMiddleware, createStore } from 'redux';
import calculatorReducer from '../reducers/calculatorReducer';
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

export const store= createStore(calculatorReducer,
     composeWithDevTools(applyMiddleware(logger)))
     