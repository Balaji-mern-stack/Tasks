import React, { useState } from 'react'

function DateTask2() {

    const[date1, setdate1]=useState()
    const[date2, setdate2]=useState()
    const[result, setresult]=useState()

    
    function compare(){

        // const start=

        if(date1>date2){
            setresult(`${date1} is Before ${date2}`)
        }else if(date1<date2){
            setresult(`${date2} is After ${date1}`)
        }else{
            setresult('Please Enter The Date')
        }
    }
    


  return (
    <div>
      <input type='date'
      name='date1'
      onChange={(e)=>{setdate1(e.target.value)}}
      /><br/>
      <input type='date'
      name='date2'
      onChange={(e)=>{setdate2(e.target.value)}}
      /><br/>

      <button onClick={compare}>click</button><br/>
      <p>{result}</p>
    </div>
  )
}

export default DateTask2
