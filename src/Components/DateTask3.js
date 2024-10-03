import React, { useState } from 'react'

function DateTask3() {

    const[startdate, setstartdate]=useState()
    const[enddate, setenddate]=useState()
    const[difference, setdefference]=useState()

    function caldifference(){
        if(startdate && enddate){
        const start=new Date(startdate)
        const end=new Date(enddate)
        const diff=end-start
        const daydiff=Math.abs(diff/(1000*60*60*24))
        setdefference(daydiff)
        }
    }

  return (
    <div>
      <input type='date'
      name='startdate'
      onChange={(e)=>{setstartdate(e.target.value)}}
      /><br/>
      <input type='date'
      name='enddate'
      onChange={(e)=>{setenddate(e.target.value)}}
      /><br/>
      <button onClick={caldifference} >click</button>
      <p>The Difference Is: {difference}</p>
    </div>
  )
}

export default DateTask3
