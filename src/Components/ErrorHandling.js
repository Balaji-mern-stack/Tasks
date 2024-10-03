import React, { useState } from 'react'

function ErrorHandling() {

    const[num1, setnum1]=useState('')
    const[num2, setnum2]=useState('')
    const[error, seterror]=useState('')
    const[Result, setresult]=useState(null)


    function handlesubmit(e){
        e.preventDefault();
        seterror('')
        setresult(null)
     try{
        const number1=parseFloat(num1);
        const number2=parseFloat(num2);

        if(number2 === 0 || isNaN(number2)){
            throw new Error('division by zero is not allowed');
            
        }
        const divisionresult = number1/number2;
        setresult(divisionresult)
        }catch (error){
        seterror(error.message);
       }
    }
    
  return (
    <div>
        <form onSubmit={handlesubmit}>
            number1:
      <input type='text'
        name='num1'
      value={num1}
      placeholder='Enter the number'
      onChange={(e)=>{setnum1(e.target.value)}}
      /><br/>
      number2:
      <input type='text'
      name='num2'
      value={num2}
      placeholder='Enter the number'
      onChange={(e)=>{setnum2(e.target.value)}}
      /><br/>
      <button type='submit'>Calculate</button>
      </form>
      <p>{error}</p>
      <p>result:{Result}</p>

    </div>
  )
}

export default ErrorHandling
