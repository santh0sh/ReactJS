import React from 'react'
import useFetch from './useFetch'

const TestuseFetch = (props) =>{
    const url='https://jsonplaceholder.typicode.com/users'
    
    const {loading,error,data=[]}= useFetch(url)
     if (error)  return <p >Error! </p>
     if (loading) return <p>Loading............ </p>

     return (
         <div>
             <h1 className="bg-info">
                 Data from REST API using custom hook</h1>
             <ul>
                 {
                     data?.map( item=>(
                         <li key={item.id}>{item.name}</li>
                     ))
                 }
             </ul>
         </div>
     )
}
export default TestuseFetch