import React from 'react'
import { useLocation } from 'react-router-dom'

function Save() {

   let location = useLocation()
   let input=location.state

  return (
    <div>
      <p>Email:{input}</p>
    </div>
  )
}

export default Save
