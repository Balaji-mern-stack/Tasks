import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './Events.css'

function Eventhandler() {

    const [username, setUserName]=useState()
    const [Password, setpassword]=useState()
    const [mailid, setmailid]=useState()
    const [mobileno, setmobileid]=useState()
    const [selectvalue, setselectvalue]=useState()
    const [radioValue, setRadioValue]=useState()
    const [checkvalue, setcheckvalue]=useState(true)

    function handlesubmit(e){
        e.preventDefault()
    console.log(username);
    console.log(Password);
    console.log(mailid);
    console.log(mobileno);
    console.log(selectvalue);
    console.log(radioValue);
    console.log(checkvalue);
    }


  return (
    <div className='a1'>
        <form onSubmit={handlesubmit} >
            <label>
        UserName:
      <input className='a2' type='text' placeholder='Enter the Username' onChange={(e)=>{setUserName(e.target.value)}}/><br/>
      Password:
      <input className='a3' type='password' placeholder='Enter the Password' onChange={(e)=>{setpassword(e.target.value)}}/><br/>
      Mail id:
      <input className='a4' type='email' placeholder='Enter the mailid' onChange={(e)=>{setmailid(e.target.value)}}/><br/>
      Mobile No:
      <input className='a5' type='number' placeholder='Enter the mobileno' onChange={(e)=>{setmobileid(Number(e.target.value))}}/><br/>
      Courses
      <select className='a6' onChange={(e)=>{setselectvalue(e.target.value)}}>
        <option>Web Develeopment</option>
        <option>Mobile Develeopment</option>
        <option>Front Develeopment</option>
        <option>Backend Develeopment</option>
      </select><br/>
      gender
      <input type='radio' id='Male' name='gender' value='Male' onChange={(e)=>{setRadioValue(e.target.value)}} />
      <label for='Male'>Male</label>
      <input type='radio' id='Female' name='gender' value='Female' onChange={(e)=>{setRadioValue(e.target.value)}}/>
      <label for='Female'>Female</label>
      <input type='radio' id='others' name='gender' value='others'onChange={(e)=>{setRadioValue(e.target.value)}}/>
      <label typeof='others'>others</label><br/>
      
      <input type='checkbox' id='accept' name='accept' checked={checkvalue} onChange={(e)=>{setcheckvalue(!checkvalue)}}/>
      <label for='accept'>accept</label><br/>
      <Button as="input" type="submit" value="Submit" />{' '}
     </label>
    </form>
    {username}
    <br />
    {Password}
    </div>

  )
}

export default Eventhandler
