import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const {id}=useParams()
  return (
    <div className='bg-warning'>
        <h3> Profile of #{id}</h3>
        <h4>This is a dummy user profile</h4>
    </div>
  )
}

export default UserProfile