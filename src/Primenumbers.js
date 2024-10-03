import React, { useState } from "react";
function Prime(){
const [num, setnum]=useState()
const [result, setresult]=useState()
  

function prime(num){
    if(num<=1)
        return 'enter the valid number';
        ;

    for(let i=2 ;i<=Math.sqrt(num);i++){
        if(num % i===0){
            return 'it is not a prime number';
            ;
        }
    }
    return 'it is a prime number';
    
}
 function primeresult(){
    setresult(prime(num));
 }



    return(
        <div>
            <h1>prime number or not</h1>
            <input type="text" onChange={(e)=>{setnum(Number(e.target.value))}}/>
            <button onClick={primeresult}>click</button>

            {result}
        </div>
    )
}
export default Prime