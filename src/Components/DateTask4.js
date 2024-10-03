import React, { useState } from 'react'

function DateTask4() {

    const[dateinput, setdateinput]=useState('')
    const[daysinput, setdaysinput]=useState('')
    const[addresult, setaddresult]=useState('')
    const[subresult, setsubresult]=useState('')

    function add(){
        let date=new Date(dateinput)
        let days=parseFloat(daysinput)
        date.setDate(date.getDate()+ days)
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1)
        const day = String(date.getDate())
        const formattedDate = `${day}-${month}-${year}`;
        setaddresult(formattedDate) 
    }
    function sub(){
      let date= new Date(dateinput)
      let days=parseFloat(daysinput)
      date.setDate(date.getDate()-days)
      const year=date.getFullYear()
      const month=String(date.getMonth()+1)
      const day=String(date.getDate())
      const format=`${day}-${month}-${year}`
      setsubresult(format)
    }
  return (
    <div>
      <input type='date'
      name='dateinput'
      onChange={(e)=>{setdateinput(e.target.value)}}
      /><br/>
      <input type='number'
      name='number' 
      placeholder='Enter the number'
      onChange={(e)=>{setdaysinput(e.target.value)}}
      /><br/>
      <button onClick={add}>add</button>
      <p>{addresult}</p><br/>
      <button onClick={sub}>sub</button>
      <p>{subresult}</p>
    </div>
  )
}

export default DateTask4
