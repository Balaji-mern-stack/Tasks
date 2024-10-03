import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function RoutingExample() {
    let [data, setData] = useState  ()
    let navigate = useNavigate()
    let obj = {
        name:"balaji",
        course:"react"
    }

    function handleClick(){

        console.log("hi...")
        navigate('/UseLocation',{state:obj})
    }
  return (
    <div>
      <h1>react router dom example</h1>
      <input type='text' onChange={(e) =>{setData(e.target.value)}} />
      <Link to='/mousehint'>
      <button >go to mouse hints</button>
      </Link>
      <a href='/mouseevents'>go to mouse events</a>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default RoutingExample
