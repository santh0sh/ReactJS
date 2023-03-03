import React from 'react'
const withIncrement= (originalComponent) =>{
       class updatedComponent extends React.Component{
           state={count:0}
           increment=()=>{
               this.setState(prevState=>{
                   return {count:prevState+1}
               })
           }
          componentDidMount(){
              //initialize state with ajax //deffault themes
          }
          render(){
              return(
                  <originalComponent  count={this.state.count}
                              increment={this.increment}/>
              )
          }
       }
       return updatedComponent
}
export default withIncrement