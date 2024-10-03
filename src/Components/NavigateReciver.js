import React from 'react'
import { useLocation } from 'react-router-dom'
function NavigateReciver() {
    let location=useLocation()
    
     let{userid,password,mobileno}=location.state ||{}
   
  return (
    <div>
        
        <h1>Detalis </h1>

      <p>Userid:{userid}</p>
    
      <p>Password:{password}</p>
      
      <p>Mobileno:{mobileno}</p>

      
    </div>
  )
}

export default NavigateReciver
