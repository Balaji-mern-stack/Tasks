import React, { useState } from "react";
function Factorial(){
    const [num , setnum]=useState(0)
     const [result, setResult]=useState()


    function fact() {
        // if (num === 0 || num === 1) {
        //     return 1;
        // }
        // return num * fact(num - 1);
        let factorial=1;
        for (let i=1;i<=num;i++){
            factorial*=i;
            
        }
        console.log(factorial)
        setResult(factorial)
    
    }
    // function factResult(){
    //  setResult(fact(num));


   
    // }
     
   
    



    return(
        <div>
            <h1>Factorial</h1>
            <input type="text"  onChange={(e)=>{setnum(Number(e.target.value))}}/>
            <button onClick={fact}>click</button>
            {result}

        </div>
    )
}
export default Factorial