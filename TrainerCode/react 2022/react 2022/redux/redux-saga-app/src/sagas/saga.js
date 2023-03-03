import { takeLatest, put ,delay} from "redux-saga/effects";

//action
function* ageUpAsync()  {
  //mock as if ajax call is taking some time to fetch data
  //fetch(url).then(resp=> {
 //   yield put ( yield put({ type: "AGE_UP_ASYNC", value: 1 });
 //   .error(err =>{
 //     yield put ( yield put({ type: "Error", value: err });
  //  })
  //  )
  //})
  
  yield delay(4000);
  //yield logresult("url")
  //yield put({type:"LOG_DATA",value:'ageUP invoked'})  
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
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
