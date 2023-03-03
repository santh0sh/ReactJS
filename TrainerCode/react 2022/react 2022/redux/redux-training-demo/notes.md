store : initial state
{
 
    output:0
   
}

reducers:
  1. calculatorReducer

      

3. actions:
1. ADD_CLICKED
2. SUBTRACT_CLICKED


4. middlewares:
   a. logger
   b. devtools

5. containers:
  1. calcualtorContainer
  2. timerContainer

6. components
   1. App



CI/CD

TDD : Test Driven dev.
1. write the test (spec) - jest 
2. write the actual code 
3. run the test    (pass / fail)

unit:

render
  <h1>{this.props.result}</h1>
  <button onClick={this.props.add(10,20)}>
  <button onClick={this.props.subtract(10,20)}>

const getstate=(store)=>({
    result=store.output
})

const fireActions=(dispatch)=>({
    add:bindActionCreators(addInputs,dispatch)
    subtract:bindActionCreators(subtractInputs,dispatch)
})

export default connect(getState,fireAction)(Home)