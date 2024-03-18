import React from 'react'

export default function App20() {
    const GREET = process.env.REACT_APP_GREET
    const LOCATION = process.env.REACT_APP_LOCATION
    const PINCODE = process.env.REACT_APP_PINCODE
  return (
    <div>{GREET},{LOCATION},{PINCODE}</div>
  )
}