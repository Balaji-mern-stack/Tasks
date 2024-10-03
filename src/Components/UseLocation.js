import React from 'react'
import { useLocation } from 'react-router-dom'

function UseLocation() {
    let location = useLocation()
    let a= location.state
    console.log(location.state)
    let {name, course} = location.state
  
  return (
    <div>
      {a.name}
        <br />
        {a.course}
        <br />
        {name}
        <br />
        {course}
    </div>
  )
}

export default UseLocation
