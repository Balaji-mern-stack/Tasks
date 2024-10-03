import React from 'react'

function KeyBoardEvents() {
  
    function handleKey(e){

       console.log(e.key);
       if(e.key==="Shift"){
        handlesubmit()
       }
      //  e.key

    }

    function handlesubmit(){
        alert("submitted")
    }

  return (
    <div onKeyDown={handleKey}>
        <input type='text' />
        <button type='submit'>submit</button>
      
    </div>
  )
}

export default KeyBoardEvents
