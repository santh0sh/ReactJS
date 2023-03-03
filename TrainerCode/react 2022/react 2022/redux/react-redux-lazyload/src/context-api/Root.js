import React from 'react'
import ContextApp from './containers/ContextApp'
import Login from './containers/Login'
import UserProvider, { UserConsumer } from './context/UserContext'

// Context API is used to avoid props drilling
// Provider-consumer(s) pattern (1:m)
// Easy to handle global application state within React app without Redux/Mobx 
const Root = () => (
  <UserProvider>
    <UserConsumer>
      {({ user, handleLogin }) =>
        user ? <ContextApp /> : <Login handleLogin={handleLogin} />
      }
    </UserConsumer>
  </UserProvider>
)
export default Root
