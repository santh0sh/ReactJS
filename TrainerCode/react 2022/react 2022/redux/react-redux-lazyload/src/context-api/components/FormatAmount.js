import React from 'react'
import formatNumber from 'format-number'

const FormatAmount = ({ totalAmount }) => {
  return <span>{formatNumber({ prefix: 'Rs.' })(totalAmount)}</span>
}

export default FormatAmount
