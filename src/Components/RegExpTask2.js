import React, { useState } from 'react'

function RegExpTask2() {

    const[input, setinput]=useState()
    const[result,setresult]=useState()

    const letter=/^[a-zA-Z]*$/
    const digits=/^[0-9]*$/
    const specialchar=/^[\W_]*$/

    function classification(){
        if(letter.test(input)){
            setresult('Letter')
        }else if(digits.test(input)){
            setresult('Digits')
        }else if(specialchar.test(input)){
            setresult('Special Char')
        }else{
            setresult('unknown')
        }
    }

 
  return (
    <div>
        <h1>Classification</h1>
      <input type='text'
      name='input'
      placeholder='enter the string'
      onChange={(e)=>{setinput(e.target.value)}}
      /><br/>
      <button onClick={classification}>submit</button><br/>
     <p>{result}</p> 
    </div>
  )
}

export default RegExpTask2
