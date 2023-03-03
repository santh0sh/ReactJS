// Set up your root reducer here...
import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
// Deposit reducers
import bankingReducer from './bankingReducer';

const rootReducer = combineReducers({
 //routing: routerReducer,
 account: bankingReducer
});

export default rootReducer;
/*
{
    account:{
          balance:0,
          withdrawls:[],
          deposits:[]
    }
}
*/