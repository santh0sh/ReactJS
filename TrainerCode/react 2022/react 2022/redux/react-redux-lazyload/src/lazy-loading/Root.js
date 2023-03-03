import React, { Suspense } from 'react'
import Login from './containers/Login'
import UserProvider, { UserConsumer } from './context/UserContext'

const BankApp = React.lazy(() => import('./containers/BankApp'))

const Root = () => (
  <UserProvider>
    <UserConsumer>
      {({ user, handleLogin }) =>
        user ? (
          <Suspense fallback='loading..'>
            <BankApp />
          </Suspense>
        ) : (
          <Login handleLogin={handleLogin} />
        )
      }
    </UserConsumer>
  </UserProvider>
)
export default Root
