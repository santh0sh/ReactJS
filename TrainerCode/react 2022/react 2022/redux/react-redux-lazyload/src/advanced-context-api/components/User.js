import React, { memo } from 'react'
import Greeting from './Greeting'

// Using React.memo
// which allows to return old state if props are not changed 
// to avoid re-rendering and improve performance.

const User = memo(({ profilePic }) => {
  return (
    <div>
      <img className='App__userpic' src={profilePic} alt='user' />
      <Greeting />
    </div>
  )
})

User.displayName = 'User'
export default User
