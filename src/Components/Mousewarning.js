// import React, { useState } from 'react'

// function Mousewarning() {
//  const [result, setresult]=useState(false)
//  function handleover(){
//     setresult(true)
//  }

//  function handleout(){
//     setresult(false)
//  }
//   return (
//     <div 
//      style={{
//         width: '200px',  
//         height: '100px', 
//         padding: '20px',
//         backgroundColor: 'lightblue',
//         textAlign: 'center',
//      }}
//      onMouseOver={handleover} onMouseOut={handleout} 
//     >  
//        hover over  me
//         {result && (
//         <div style={{
           
//             width:'150px',
//             padding:'10px',
//             backgroundColor: 'blue',
//             textAlign: 'center',

//         }}
//         >     
//             warning:msg !</div>)} 
//     </div>
    
//   )
// }

// export default Mousewarning


import React, { useState } from 'react'

function Mousewarning() {

    const [result,setresult]=useState();
    const [result1,setresult1]=useState();

    function handleOver(e){
        setresult(e.clientX)
        setresult1(e.clientY)
        console.log(e.clientX, e.clientY)
        // setresult(true);
        
    }
    function handleout(){
        setresult('');
        
    }

  return (
    <div 
        style={{
            width:'100vw',
            height:"100vh",
            backgroundColor:"red"
        }}
    onMouseDown={handleOver}  >
        
         {result} 
         <br />
         {result1}
         
    </div>
  )
}

export default Mousewarning
