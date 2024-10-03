import React, { useState } from 'react'

function Vowels() {

    const [data, setdata]=useState()
    const [vowelscount, setvowelscount]=useState()

    function countvowels(text){
         const vowels='aeiouAEIOU'
         let count=0;
         for(let i=0;i<text.length;i++){
            if(vowels.includes(text[i])){
                count++;
         }
         }
         return count
    }
  function handlesubmit(){
    setvowelscount(countvowels(data))
  }
  return (
    <div>
      <input type='text' name='data' placeholder='enter the string' onChange={(e)=>{setdata(e.target.value)}}/>
      <button onClick={handlesubmit}>count</button>
      <p>Number of vowels:{vowelscount}</p>
    </div>
  )
}

export default Vowels
