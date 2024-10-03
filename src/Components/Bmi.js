import React, { useState } from 'react'
import './bmicalculater.css';

function Bmi() {
    
    
    const [height, setheight]=useState('');
    const [weight, setweight]=useState('');
    const [bmi, setbmi]=useState(null);
    const [status, setstatus]=useState();

        const Calculatebmi=()=>{
            if (!weight||!height){
                alert('Please enter both height and weight!');
                return ;
            }

    const heightinmeters=parseFloat(height)/100;
    const bmivalue=(parseFloat(weight)/(heightinmeters*heightinmeters)).toFixed(2);
    setbmi(bmivalue);
    let bmistatus=''
    if(bmivalue<18.5){
        bmistatus='Under Weight';
    }
    else if(bmivalue<24.9){
        bmistatus='Normal Weight';
    }
    else if(bmivalue<29.9){
        bmistatus='Over Weight';
    }
    else{
        bmistatus='obesity';
    
    }
    setstatus(bmistatus);
};

  return (
    <div className='container'>
        <h1>BMI Calculater</h1>
        <div className='input-group'>
        <label>
            Height(cm):
        <input type='number' onChange={(e)=>{setheight(Number(e.target.value))}}
        placeholder='Enter the height'/>
        </label>
        </div>
        
    
        <div className='input-group'>
        <label>
            Weight(kg):
            <input type='number'
            onChange={(e)=>{setweight(Number(e.target.value))}}
            placeholder='Enter the Weight'
            />
        </label>
        </div>
        
        <button onClick={Calculatebmi}>Calculate</button>
        
        {bmi && (
            <div className='result'>
            <h3>your Bmi:{bmi}</h3>
            <h3> your Status:{status}</h3>
            </div>
        )}
      
    </div>
  )
}

export default Bmi
