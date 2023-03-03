import {call,takeLatest,put,delay} from 'redux-saga/effects'

function* salaryUpAsync(action){
    console.log('Params:',action.type,'-',action.value)
    try{
        yield put ({type:'FETCHING'})
        const response=yield call(fetch,'https://jsonplaceholder.typicode.com/users')
        const users=yield response.json()
        console.log(users)
            yield put ({type:'RECEIVED_USERS',payload:users})      
    }catch(error){
            yield put({type:'ERROR',payload:error})
       }
       yield delay(5000)//kill some time mock
       yield put ({type:'SALARY_UP_ASYNC',value:1000})
    }
export function* watchSalaryUp(){
    yield takeLatest("SALARY_UP",salaryUpAsync)
}