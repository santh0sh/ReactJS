/*
Lazy
React.Lazy
useLazy
HOC : to lazy load module with ajax call

react loadable(HOC)
*/

import React, { Suspense } from 'react'

const PaymentComponent=React.lazy(()=> import('../payment/Payment'))
const Dynamic = () => {
  return (
    <div>
        <h1>Its is a lazy component</h1>
        <Suspense fallback={<div>Loading please wait...</div>}>
            <PaymentComponent/>
        </Suspense>
        
    </div>
  )
}

export default Dynamic