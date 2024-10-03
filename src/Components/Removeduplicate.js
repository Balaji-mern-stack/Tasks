import React, { useState } from 'react'

function Removeduplicate() {

    const[arrValues , setArrvalues]=useState()
    const[result, setresult]=useState()

    function remove(){
    let arr = arrValues.split(',')
    let res =[]
    for(let i of arr){
      if(res.includes(i)){
        continue
      }
      else{
        res.push(i)
      }

    }
    
    setresult(res)
    
  

    
    }



  return (
    <div>
      <input type='text' name='arrValues' placeholder='enter the values' onChange={(e)=>{setArrvalues(e.target.value)}}/>

      <button onClick={remove}>click</button>
      {result.join()}
    </div>
  )
}

export default Removeduplicate

