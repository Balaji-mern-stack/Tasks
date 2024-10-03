import React, { useState } from 'react'

function RegExpTask3() {

    const[input, setvalue]=useState()
    const[message, setMessage]=useState()
    const[numresult, setnumresult]=useState()
    const url=/(https?:\/\/)?([\w\d\.-]+)\.([a-z\.]{2,6})(\/[\w\d\.-]*)*\/?/gi
    const date=/\d{2}-\d{2}-\d{4}/
    function extract(){
       const urlresult=url.exec(input)
       const dateresult=date.exec(input)
        
       if(urlresult && dateresult){
        setMessage(urlresult[0])
        setnumresult(dateresult[0])
       }else{
        setMessage('Not Found  ')
       }

    }



  return (
    <div>
      <input type='text' onChange={(e)=>{setvalue(e.target.value)}} /><br/>
      <button onClick={extract}>click</button>
      <p>{message}</p>
      <p>{numresult}</p>
    </div>
  )
}

export default RegExpTask3

