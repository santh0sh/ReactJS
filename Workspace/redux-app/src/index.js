import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { store } from './calc/store/config.dev';
import { Provider } from 'react-redux';
import { store } from './bank/store/config.dev';
import { applyMiddleware, legacy_createStore } from 'redux';
import  createSagaMiddleware from 'redux-saga' ;
import {watchSalaryUp} from './sagas/saga'
import createSagaMiddleware from '@redux-saga/core';
import reducer from './sagaApp/store/reducer';
import {watchSalaryUp} from './sagaApp/sagas/sagawatcher';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchSalaryUp)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();


/*
//Level 1 and Level2 : Middleware 
import { applyMiddleware, legacy_createStore  as createStore } from "redux";
import logger from 'redux-logger'

const reducer=function(state,action){
  if (action.type==='INC'){
    //let oldstate={...state}
    return  state+action.payload
  }
  if (action.type==='DEC'){
    return state-action.payload
  }
   return state
}
const middleware=applyMiddleware(logger)
const store=createStore(reducer,1,middleware)
store.subscribe( ()=>console.log(`Store :${ store.getState()}`)) //1,6,2,5,5


store.dispatch({type:'INC',payload:5})
store.dispatch({type:'DEC',payload:4})
store.dispatch({type:'INC',payload:3})
store.dispatch({type:'MULTIPLY',payload:5})

//level 3:  combineReducers(), debugging with redux-devtools
import { applyMiddleware, combineReducers, legacy_createStore  as createStore } from "redux";
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const userReducer=(state={},action)=>{
    switch (action.type){
      case 'CHANGE_NAME':{
        return state={...state,name:action.payload}   //{user:{name:'Sriram',salary:50},customers:[]}
      }
      case "CHANGE_SALARY":{
        return state={...state,salary:action.payload}
      }
      default:{
        return state
      }
    }
}
const customersReducer=(state=[],action)=>{
  return state
}

const allReducers=combineReducers({
  user:userReducer,
  customers:customersReducer
})
/*  State tree
{             
    user:{},
    customers:[]
}

const store=createStore(allReducers,
         composeWithDevTools(applyMiddleware(logger)))

store.subscribe( ()=>console.log(`Store :${ store.getState()}`)) 

store.dispatch({type:"CHANGE_NAME",payload:"Murthy"})
store.dispatch({type:"CHANGE_SALARY",payload:50})
store.dispatch({type:"CHANGE_NAME",payload:"Sriram"})
store.dispatch({type:"CHANGE_CITY",payload:"Chennai"})

*/
//========================================================


/*

import { applyMiddleware, combineReducers, legacy_createStore  as createStore } from "redux";
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from "axios";
import thunk from "redux-thunk";

const initialState={
  fetching:false,
  fetched:false,
  users:[],
  error:null
}
const initialState={
  input1:0,
  input2:0,
  output:0,
  error:null
}
const reducer=(state=initialState,action)=>{
  
  switch(action.type){
    case 'FETCH_USER_STARTED':{
      return{...state,fetching:true}
    }      
    case 'RECEIVED_USERS':{
        return{...state,fetching:false,fetched:true,users:action.payload}  
    }
    case 'FETCH_ERROR':{
      return{...state,fetching:false,fetched:false,users:[],error:action.payload}
    }
    default:
        return state

  }
}

const store=createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk,logger)))

store.subscribe( ()=>console.log(`Store :${ store.getState()}`)) 

store.dispatch((dispatch)=>{
  dispatch({type:'FETCH_USER_STARTED'})
  axios.get('https://jsonplaceholder.typicode.com/users')
       .then (( response)=>{
        dispatch({type:'RECEIVED_USERS',payload:response.data})
       })
       .catch ( (error)=> {
          console.log (`Error occured from API`);
          dispatch({type:'FETCH_ERROR',payload:error})
       })
})*/