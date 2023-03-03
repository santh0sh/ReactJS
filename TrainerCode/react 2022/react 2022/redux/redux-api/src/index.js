/*
//Immutable js 
//Primitive type
var x=1;
var y=x;
x=2;
console.log(y);//?
//Reference type
var a={name:'sri'};
console.log(a);
var b=a;
b.name="Murthy";
console.log(a);//?

//Object.assign, $.extend , _.extend  _.assign
var c={name:'Sriram',salary:5000};
console.log(c);
var d=Object.assign({},c,{name:'Raj'})
console.log(d);

var k=[0,1,2]
var m=k.concat(4);
console.log(m);// concat,filter,map works with immutable
var j=k.filter( val=>val !=2);
console.log(j);

var p={name:"Kavitha",things:[0,1,2]}
var q=Object.assign({},p,{name:"Rama"})
console.log(q.things);
q.things.push(3)
console.log(q.things);

*/

/*


//Level 1
//Redux API demo
//npm install redux --save


import {createStore} from 'redux'
// reducers are basically functions to update the store
// Create reducers to update store
const reducer=function(state,action){
    
    if(action.type==='INC'){
        return state+action.payload;
    }    
    if(action.type==='DEC'){
        return state-action.payload;
    }
    return state;
}

// Creating store and attaching to reducer with initial state
const store=createStore(reducer,1);
// Subscribe to store to get new state
store.subscribe(()=>{
    console.log("Store Changed :"+store.getState())//2,5,-15,,-15
});

// Dispatch action to invoke reducer 
store.dispatch({type:"INC",payload:1});
store.dispatch({type:"INC",payload:3});
store.dispatch({type:"DEC",payload:20});

store.dispatch({type:'Multiply',payload:5})
// type should not be changed, payload can be changed


*/



//--------------------------------------------------------------


//Level 2 Middleware
//1. load applyMiddleware
/*
import {createStore,applyMiddleware} from 'redux'
//npm install redux-logger  --save-dev
import logger from "redux-logger";

const reducer=function(state,action){
    if(action.type==='INC'){
        return state+action.payload;
    }
    if(action.type==='DEC'){
        return state-action.payload;
    }
    else if(action.type==='E'){
        throw new Error("Ooops!!!!!!")
    }
    return state;
}
//Custom Logger middleware
const RemoteLogger=(store)=>(next)=>(action)=>{
    console.log("Remote logging done for ",action);
   // action.type="DEC"; //we can modify things
   // make fetch/axios call to remote log the details
    next(action);
}

//Custom Error Middleware
const error=(store)=>(next)=>(action)=>{
    try{
        next(action);
    }catch(e){
        console.log('Ohhhhh..Error',e);
    }
}

const middleware=applyMiddleware(logger);
const store=createStore(reducer,1,middleware);

store.subscribe(()=>{
    console.log("Store Changed :"+store.getState())
});
store.dispatch({type:"INC",payload:1});
store.dispatch({type:"INC",payload:3});
store.dispatch({type:"DEC",payload:20});
*/


//----------------------------------------------------------------------
//Level 3:Combined reducers with debugging using Redux dev tool
/*
import {combineReducers,applyMiddleware,createStore}   from 'redux';
import logger from "redux-logger";

//npm install  redux-devtools-extension --save-dev
import { composeWithDevTools } from "redux-devtools-extension"; 
// Goto Chrome, search for "redux dev tools"and add extension


const userReducer=(state={},action)=>{   
    switch(action.type){
        case "CHANGE_NAME":{
        // olddata={...state}
         return state={...state,name:action.payload};    //name:Raju
        }
        case "CHANGE_AGE":{
         return  state={...state,age:action.payload};     //age:50   
      
        }       
    }
   return state;
}
const tweetReducer=(state=[],action)=>{      
   return state;
}

const reducers=combineReducers({
    user:userReducer,
    tweets:tweetReducer
});

const store=createStore(reducers,
    composeWithDevTools(applyMiddleware(logger)));

    store.subscribe(()=>{
    console.log("store Changed:",store.getState());
})
store.dispatch({type:'CHANGE_NAME',payload:"Murthy"});
store.dispatch({type:'CHANGE_AGE',payload:35});
store.dispatch({type:'CHANGE_NAME',payload:"Raju"});
store.dispatch({type:'CHANGE_ADDRESS',payload:'hyderabad'})
//---------------------------------------------------------------------

*/




//Level 4:  Async actions with Redux thunk and Axios 
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'; // npm install redux-thunk --save
import { composeWithDevTools } from "redux-devtools-extension";
//npm install  axios --save
import axios from 'axios';

// state tree +Component= DOM tree
const initialState={
    fetching:false,
    fetched:false,
    user:[],
    error:null
}

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case "FETCH_USERS_START":{
            return {...state,fetching:true}      
        }
        case "FETCH_USERS_ERROR":{
            return {...state,fetching:false,error:action.payload}            
        }
        case "RECEIVED_USERS":{
            return {...state,
                       fetching:false,
                       fetched:true,
                       users:action.payload,
                    }         
        }
    }
    return state;
}

const store=createStore(reducer,
    composeWithDevTools (applyMiddleware(thunk,logger)));

store.subscribe(()=>console.log(store.getState()))

//thunk middleware expects only one dipatch
store.dispatch((dispatch)=>{
    //multiple actions occur with single action     
    dispatch({type:"FETCH_USERS_START"})

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then ( (response) =>{
       dispatch({type:"RECEIVED_USERS",payload:response.data})
    })
    .catch((error) =>{
      dispatch({type:"FETCH_USERS_ERROR",payload:error})
    })
})// end of code

//--------------------------------------------------------------




/*
// Level 5 - Redux-routing 
// npm install redux-routing --save
import { applyMiddleware, createStore } from 'redux'
import { createMiddleware, History, match,
             navigate, reducer, route } 
             from 'redux-routing'
 
// define routes
const routes = [
  route('/', () => console.log('navigated to /')),
  route('/foo', () => console.log('navigated to /foo')),
  route('/foo/:bar', () => console.log('navigated to /foo/:bar'))
]
 
// create routing middleware, set up with HTML5 History
const middleware = createMiddleware(History)
 
// create store with middleware
const createStoreWithMiddleware =
     applyMiddleware(middleware)(createStore)
     
const store = createStoreWithMiddleware(reducer)
 
// subscribe to changes
store.subscribe(() => {
  const route = store.getState()
  const matched = match(route.href, routes)
 
  if (matched) {
    matched.handler()
  } else {
    console.log('404 not found')
  }
})
 
// start navigating
if(isAdmin)
store.dispatch(navigate('/'))
else
  store.dispatch(navigate('/guest'))
// logs 'navigated to /'
store.dispatch(navigate('/foo'))
// logs 'navigated to /foo'
store.dispatch(navigate('/foo/123'))
// logs 'navigated to /foo/:bar'
store.dispatch(navigate('/foo/bar/baz'))
// logs '404 not found'
//----------------------------------------------------------
*/


/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//npm install react-redux --save
import {Provider} from 'react-redux';

import store from "./store"

const app=document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
     </Provider>
     ,app);

registerServiceWorker();

*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/