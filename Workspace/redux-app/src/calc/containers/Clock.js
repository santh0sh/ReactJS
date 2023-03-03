import React, { useEffect,useState } from 'react'

const Clock = () => {
    const[time,setTime] = useState(new Date())
    
    useEffect (()=>{
        const interval = setInterval (()=>{
            setTime(new Date())
        },1000)
        return ()=> clearInterval(interval) //to avoid memory leak
    },[])
    return (
    <div>
        <h4> Now :  {time.toLocaleTimeString()}</h4>
    </div>
    )
}

export default Clock