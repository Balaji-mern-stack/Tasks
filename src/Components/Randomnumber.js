import React, { useState } from 'react'

function Randomnumber() {
    const [result,setresult]=useState(null)


    function number(){
      const result1= Math.floor(Math.random()*101);
       setresult(result1)
    }

  return (
    <div>
        <h1>Ramdom Number Generate</h1>
      <button onClick={number}>click</button>
      {result !== null && (
        <p>Your random number is: {result}</p>
      )}
    </div>
  )
}
  
export default Randomnumber
