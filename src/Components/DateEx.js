import React, { useState } from 'react'

function DateEx() {
 
    const[date, setdate]=useState(' ')

    const startdate= new Date(date)
    let startdate1=startdate.getDate()
    const month=new Date(date)
    let month1=month.getMonth()+1
    const year=new Date(date)
    let year1=year.getFullYear()

  return (
    <div >
    
      <input type='date'
      name='date'
      onChange={(e)=>{setdate(e.target.value)}}
      />
        <button >submit</button>
        <p>{`${startdate1}-${month1}-${year1}`}</p>
    </div>
  )
}

export default DateEx
