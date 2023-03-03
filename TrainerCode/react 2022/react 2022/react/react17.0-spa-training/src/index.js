import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {BrowserRouter} from 'react-router-dom'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

//>npm install redux  react-redux
//>npm install redux-form

const rootReducer = combineReducers({
  form: formReducer,
  
});

const store = createStore(rootReducer);

ReactDOM.render( 
  <Provider store={store}>
      <React.StrictMode>
           <App/> 
    </React.StrictMode>
  </Provider>
 
  ,
  document.getElementById('root')
);


