import React, { useState } from 'react'

function RegExpTask() {

    const[email, setemail]=useState()
    const[number, setnumber]=useState()
    const[message, setMessage]=useState()
    const [numbermsg, setnumbermsg]=useState()

    const emailreg=/^\w+@\w+\.\w+$/
    const numberreg=/^\d{10}$/

    function emailcheck(){
        if (emailreg.test(email)) {
            setMessage('Valid email address.');
          } else {
            setMessage('Invalid email address. Please enter a valid email.');
          }
    }
    function numbercheck(){
        if(numberreg.test(number)){
            setnumbermsg('valid number');
        }else{
            setnumbermsg('please enter a valid number')
        }
    }
  return (
    <div>
        <h1>Validation</h1>
      <input type='email'
      name='email'
      placeholder='Enter the Email'
      onChange={(e)=>{setemail(e.target.value)}}
      /><br/>
      <input type='number'
      name='number'
      
      placeholder='Enter The Number'
      onChange={(e)=>{setnumber(e.target.value)}}
      /><br/>
      <button onClick={emailcheck} >email</button>
      <p>{message}</p>
      <button onClick={numbercheck}>number</button>
      <p>{numbermsg}</p>


    </div>
  )
}

export default RegExpTask
