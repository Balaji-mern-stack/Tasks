import React, { useState } from 'react'

function Mousehint() {

  const [result, setresult]=useState(false)
 
    function handleover(e){
      console.log(e.clientX, e.clientY)
      setresult(true)
    }
    function handleout(){
      setresult(false)
    }
  function reactmouse(){
    setresult(handleover)
    setresult(handleout)
  }
  return (
    <div onMouseOver={handleover} onMouseOut={handleout}>
      <button >submit</button>
      {/* {result &&
      <div>click me</div> } */}
      {result}
    </div>
  )
}

export default Mousehint




