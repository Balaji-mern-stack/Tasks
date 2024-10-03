import React, { useState } from 'react'

function RegExpTask1() {

    const[input, setinput]=useState()
    const[error,seterror]=useState()

    function handlechange(e){
      const {input}=e.target.value
      const regexp=/^[a-zA-z0-9]+$/
      if(regexp.test(e.target.value)){
        setinput(e.target.value)
        seterror('')
      }else{
       
        
        seterror('invalid char')
      }
    }
  return (
    <div>
      <h1>Filtering</h1>
      <input type='text'
      name='input'
      value={input}
      onChange={handlechange}
      /><br/>
      <p>{error}</p>
    
    </div>
  )
}

export default RegExpTask1
