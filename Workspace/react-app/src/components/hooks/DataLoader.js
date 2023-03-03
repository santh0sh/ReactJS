import React,{useState,useEffect} from 'react'

export default function DataLoader() {
  const[users,setUsers]=useState([])
  const[count,setCount]=useState(0)
  useEffect(()=>{
    let url='https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(response=> response.json())//resolved
        .then(data=>setUsers(data))

    
  })
    return (
        <div className='bg-warning'>
            <ul>
                {users.map(el => (<li key={el.id}>{el.name} - {el.email}</li>) )}
            </ul>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p> You Clicked Button {count} times</p>
        </div>
  )
}
/*import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}*/