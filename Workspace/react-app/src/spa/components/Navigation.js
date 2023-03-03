import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div className='navigation bg-warning'>
       
        <Link className='link' to="about">About</Link>
        <Link className='link' to="profiles">Profiles</Link>
        <Link className='link' to="dynamic">Payment</Link>
    </div>
  )
}

export default Navigation