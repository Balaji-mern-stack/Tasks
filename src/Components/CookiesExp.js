import React, { useEffect, useState } from 'react'

function CookiesExp() {

    const[Message, setMessage]=useState(false)
    const[Message2, setMessage2]=useState(false)
    const[visible, setvisible]=useState(false)


    setTimeout(() => {
        setMessage(true)
    },3000)

    setTimeout(() => {
        setMessage2(true)
    }, 3000);


    useEffect(()=>{
        const accepted=localStorage.getItem('cookiesconstant');
        if(!accepted){
            setvisible(true)
        }
        console.log("hi")
    })

    function Handleaccept(){
        localStorage.setItem('cookiesconstant','true');
        setvisible(false)
       setMessage('Thanks For Accepting')
       // setMessage(<button>click</button>)
    }
    function Handledecline(){
        
        setMessage("If u accept u get better Exprience")
    }

  return (
    <div>
    {visible &&(
    <div>
        <p>We use cookies to improve your experience. Do you accept cookies?</p>
        {Message && 
      <button onClick={Handleaccept}>Accept All</button>
        }
        {Message2 &&
      <button onClick={Handledecline}>Reject</button>
        }

    </div>
    )}
    <div>{Message}</div>
    </div>
  )
}


export default CookiesExp



