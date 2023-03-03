import {call, takeLatest, put ,delay} from "redux-saga/effects";

//action
function* salaryUpAsync(action)  {
  console.log('Params- ',action.type,'-',action.value)
  try {
    const response = yield call(fetch,'https://jsonplaceholder.typicode.com/users');
    const data = yield response.json();
    console.log(data);
    yield put({type:'RECEIVED_USERS',value:data})
  } catch (error) {
    yield put({type:"ERROR",value:error});
    
  }
  //mock as if ajax call is taking some time to fetch data
  yield delay(4000);

  yield put({ type: "SALARY_UP_ASYNC", value: 1000 });
}

export function* watchSalaryUp() {
  yield takeLatest("SALARY_UP", salaryUpAsync);
}


/*
 ES 7 -  Generator functions  function* getData()
            a am going to use yeild data
            console.log(response)  - wait   till we get response from server promise

function* demo(){
  //////.......
  // var data=[1000]
   yield 100
   yiled 200
   
}

var result=demo()
dispatch(type:kfjdslf,payload="jdsfkl")
*/
