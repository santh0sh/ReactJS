
const initialState = {
    salary:5000
}

const reducer=(state=initialState,action)=>{

    const newState = {...state}
    switch (actions.type){
        case "INCREMENT" :
            return {newState,salary:newState.salary+action.value}
        case "DECREMENT" :
            return {newState,salary:newState.salary-action.value}
        default:return state
    }
}
export default reducer