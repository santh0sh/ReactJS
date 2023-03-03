//Bank app
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {store} from './bank/store/configureStore.dev'
import App from './bank/BankApp';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

