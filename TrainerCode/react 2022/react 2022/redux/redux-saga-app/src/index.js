import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import reducer from "./store/reducer";

//npm install redux-saga 

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

//load createSagaMiddleware function
import createSagaMiddleware from "redux-saga";

// saga is function (Generator)
import { watchAgeUp } from "./sagas/saga";

// instantiate the middleware
const sagaMiddleware = createSagaMiddleware();

// bind sagamiddleware to store with reducer
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// register saga with middlware
sagaMiddleware.run(watchAgeUp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//generators - spl.functions that yield values  without loosing scope

