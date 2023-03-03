import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomeButton = () => {
    let navigate=useNavigate()
    const handleClick =() =>{
        navigate('/')
    }
  return (
    <button className='btn btn-danger' onClick={handleClick}>Back to Home</button>
  )
}