import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function NavigateSender() {
  let navigate=useNavigate()

  const [detalis, setdetalis]=useState({
    userid:'',
    password:'',
    mobileno:''
  })

  

  function handleChange(e){
  
    setdetalis({...detalis,[e.target.name]:e.target.value})
    
  }

 function handleclick(){
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      navigate('/NavigateReciver',{state:detalis})
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
  // navigate('/NavigateReciver',{state:detalis})
  
 }
 

  return (
    <div>
      <h1>Info</h1>
      user id:
      <input type='text' name='userid' placeholder='enter the userid' onChange={handleChange} /><br/>
      password:
      <input type='password' name='password' placeholder='enter the password' onChange={handleChange} /><br/>
      mobileno:
      <input type='number' name='mobileno' placeholder='enter the mobileno'  onChange={handleChange} /><br/>
      <button onClick={handleclick}>submit</button>
    </div>
  )
}

export default NavigateSender

