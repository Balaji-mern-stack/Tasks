import React, { useState } from 'react'

function String() {

    // const [name ,setname]=useState()

    // function Change(){
    //     setname(name.charAt(0).toUpperCase()+name.slice(1));
    // }
    
    const [strings, setstrings]=useState()

    function Change(){
      setstrings(strings.charAt(0).toUpperCase()+strings.slice(1));
    }
    
  return (
    <div>
        name:
      <input type='text' name='name' placeholder='enter the name' onChange={(e)=>{setstrings(e.target.value)}}/>
      <br></br>
      <button onClick={Change}>click</button>
        <p>Normal string:{strings}</p>
        {/* <p>change string:{name}</p> */}
    </div>
  )
}

export default String
