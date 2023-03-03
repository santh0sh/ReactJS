const initialState = {
  salary: 5000
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "SALARY_UP_ASYNC":
     return {newState, salary:newState.salary+action.value}
      
    case "SALARY_DOWN":
      return {newState, salary:newState.salary-action.value}

    default:return state
  }
};
export default reducer;
