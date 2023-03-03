import React from 'react'
import { Connect } from 'react-redux'

const SagaApp = (props) => {
  return (
    <div>
        <h3> working with Rdux Saga</h3>
        Current Salary <span>{props.salaryProp}</span>

    </div>
  )
}

const mapStateToProps=(state) =>{
    return {salaryProp:this.state.salary}
}
const mapDispatchToProps=(dispatch) =>{
    return {
        onSalaryUp:()=>dispatch ({type:'SALARY_UP',value:1000}),
        onSalaryDown:()=>dispatch ({type:'SALARY_UP',value:1000})
    }
}



export default connect(mapDispatchToProps,mapDispatchToProps) (SagaApp)