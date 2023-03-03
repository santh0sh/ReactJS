// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware,logger)))


