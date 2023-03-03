import React from 'react'
import Calculator from '../containers/Calculator'
import Timer from '../containers/Timer'

export default function Layout() {
  return (
    <div className="bg-warning">
        <h2>Murthy's Calculator</h2>
        <Calculator/>
        <Timer/>
    </div>
  )
}
