import React, { useState } from 'react'

function Agecalci() {

    const [birthdateinput , setbirthdateinput]=useState('')
    const [age , setage]=useState(null)

    function calculateage(){
        const today= new Date();
        const birthdate= new Date(birthdateinput);
        let calculatedAge=today.getFullYear()- birthdate.getFullYear();
        let month=today.getMonth()-birthdate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
          calculatedAge--
        }
        setage(calculatedAge)
    }
    

  return (
    <div>
     <h1>Age Calculator</h1> 
      <input type='date'
      name='birthdate'
      value={birthdateinput} onChange={(e)=>{setbirthdateinput(e.target.value)}}
      /><br/>
      <button onClick={calculateage} >Calculate</button><br/>
      <p>your age is {age} years old</p>
    </div>
  )
}

export default Agecalci



