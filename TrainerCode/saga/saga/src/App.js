import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  
    return (
      <div className="App">

        <br/><br/>
       <h3>Working with redux-saga</h3>
        <div className="Salary-label">
          Your Salary now: <span>{props.salaryProp}</span>      
        </div>
        <br/>
        <button className="btn btn-success" onClick={props.onSalaryUp}>Hike Salary by 1000/-</button>
        <button className="btn btn-danger" onClick={props.onSalaryDown}>Reduce Salary by 1000/-</button>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    salaryProp: state.salary
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSalaryUp: () => dispatch({ type: "SALARY_UP", value: 1000 }),
    onSalaryDown: () => dispatch({ type: "SALARY_DOWN", value: 1000 })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

