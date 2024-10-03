import React, { useState } from 'react'

function StringTask() {

    const[inputstring, setinputstring]=useState()
    const[result, setresult]=useState()
   
    function perform(){
        const namesArray=inputstring.split(',')
        let x =[]
        console.log(namesArray)
        for (let i of namesArray){
            console.log(i)
            x.push(getInitial(i))
            console.log(x)
            setresult(x)
            
        }

        function getInitial(name){
            let splittedName = name.split(" ")
            console.log(splittedName)
            console.log(splittedName.map(i => i[0].toUpperCase()).join("."))
          return  splittedName.map(i => i[0].toUpperCase()).join(".")
        }


        

    }
    
    
  return (
    <div>
      <input type='text' 
      name='inputstring'
      placeholder='Enter the name'
      onChange={(e)=>{setinputstring(e.target.value)}}
      /><br/>
      
      <button onClick={perform}>click</button>
      <p>{result && result.map(i => (
        <div>{i}</div>
      ))}</p>
    </div>
  )
}

export default StringTask

