import React ,{useReducer} from 'react'

const inititalState={count:10}  //cache/store
function reducer(state,action){
    switch (action.type){
        case 'INC':
            return {count:state.count+10}
        case 'DEC':
            return {count:state.count-10}
    }
}
function UseReducerDemo(){
    const [state,dispatch]=useReducer(reducer,inititalState)
    return(
        <div className="container bg-warning">
                <h1 className="bg-info">useReducer Demo</h1>
                <p>count: {state.count}</p>
                <button className="bg-success"
                     onClick={ ()=>dispatch({type:'INC'})}>INCREMENT
                 </button>

            <button className="bg-danger"
                onClick={() => dispatch({ type: 'DEC' })}>DECREMENT
            </button>
        </div>
    )
}
export default UseReducerDemo

