/*
state is possible only in containers 
having state in Stateless Functional Components is hook
UI state 
useState,useRef,useContext,useEffect,useRedecer,useMemo,useQuery
useFetch
*/
/*
import React, { Component } from 'react'

export default class Buttton extends Component {
    state={buttonText:'Click me, Please'}

   handleClick= ()=>{
        this.setState({buttonText:'Thanks... been clicked'})
   }

  render() {
      const {buttonText}=this.state
    return (
      <div>
            <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    )
  }
}
*/

import React,{useState} from 'react'

export default function Button(){
    //const customers=[]
      
    const [buttonText,setButtonText] =useState('Click me, please boss')

    function handleClick(){
        //fetch api
        return setButtonText('Thanks , been clicked!')
    }
    return <button onClick={handleClick}>
                    {buttonText}
                </button>
}


