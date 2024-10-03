import React, { useState } from 'react'
import { Button,DropdownButton, Dropdown, Placeholder } from 'react-bootstrap';
import './Events.css'


function EventsExample() {
  const [UserName, setUserName]=useState({
    firstName:"",
    secondName:"",
    surName:""
  })

  const [radioValue, setRadioValue] = useState()
  const [selectedValue, setSelectedValue] = useState()
  const [isChecked, setIsChecked] = useState(true)

  function handleChange(e){
    console.log({...UserName})
    setUserName({...UserName,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()

  console.log(UserName)

  console.log(isChecked)

  console.log(radioValue)
  console.log(selectedValue)
  }
  return (
    <div className='a1'>
      
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type='text' name='firstName' placeholder='Enter The First Name' onChange={handleChange} /><br/>
                Last Name:
                <input type='text'name='secondName' placeholder='Enter The Seconder Name'  onChange={handleChange}/><br/>
                Sure Name:
                <input type='text' name='surName' placeholder='Enter The Sure Name' onChange={handleChange}/><br/>
            
        
    
      
            
                Select the gender:
              <input type='radio' id='Male' name='gender' value='Male' checked={radioValue==="Male"} onChange={(e) =>{setRadioValue(e.target.value)}} />
              <label for='Male'>Male</label>
              <input type='radio' id='Female' name='gender' value='Female' checked={radioValue==="Female"} onChange={(e) =>{setRadioValue(e.target.value)}}/>
              <label for='Female'>Female</label>
              <input type='radio' id='Others' name='gender' value='Others' checked={radioValue==="Others"} onChange={(e) =>{setRadioValue(e.target.value)}}/>
              <label for='Others'>Others</label><br/>
              Select the language:
             <select onChange={(e) =>setSelectedValue(e.target.value)}>
              <option value="01">tamil</option>
              <option>english</option>
              <option>Hindi</option>
             </select>
              Accept the condition :
              <input type='checkbox' id='Accept' name='isChecked'  checked={isChecked} onChange={()=>{setIsChecked(!isChecked)}}/>
              <label for='Accept'>Accept</label><br/>
              <Button as="input" type="submit" value="Submit" />{' '}

            </label>
        </form>
        
    </div>
    
  )
}

export default EventsExample
