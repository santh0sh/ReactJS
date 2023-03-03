import React from 'react'
import DepositsPage from './containers/DepositsPage'
import Homepage from './containers/Homepage'
import WithdrawPage from './containers/WithdrawPage'

const BankApp = () => {
  return (
    <div className='bg-secondary'>
        <h1> Sample Bank</h1>
        <Homepage/>
        <br/>
        <DepositsPage/>
        <br/>
        <WithdrawPage/>
    </div>
  )
}

export default BankApp