// CDM = useEffect - fetch and update UI with dependencies
// useState - fetch - REST API state

import React,{useState,useEffect} from 'react'

export default function DataLoader(){
 
    const [data,setData]=useState([])
    //CDM
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(response =>response.json())
           .then (data=>setData(data))
    },[])

    return (
        <div>
            <ul>
                {data.map(el =>(<li key={el.id}>{el.name}</li>))}
            </ul>
        </div>
    )
}


