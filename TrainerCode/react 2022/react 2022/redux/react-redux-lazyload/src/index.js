

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Root from './lazy-loading/Root'

// Use <App/> for component Life cycle
// use <Root/> for Lazy loading (also explain profiling)
ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/*
//for Fake-medium app with profiling - Run this  (with redux)
import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import { Provider } from "react-redux";
import FakeApp from "./fake-medium/containers/FakeApp";
import store from "./fake-medium/store";

ReactDOM.render(
  <Provider store={store}>
    <FakeApp />
  </Provider>,
  document.getElementById("root")
);*/
