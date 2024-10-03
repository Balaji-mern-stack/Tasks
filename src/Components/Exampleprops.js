import React, { useState } from 'react'
import Examplepropchild from './Examplepropchild'

function Exampleprops() {
     const [num ,setnum]=useState()
     const [result, setresult]=useState()
    let a=10; 
    let b=20;
  return (
    <div>
      <h1>parent class</h1>
      <input type='text' onChange={(e)=>{setnum(e.target.value)}}  />

      <Examplepropchild x={num} y={b}/>
    </div>
  )
}

export default Exampleprops
