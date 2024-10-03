import React, { useState } from "react";

function UseStateHook(){   // functional component

    const [data, setData] = useState(6)
    const [result, setResult] = useState()
    function display(){
        setResult(data*2)

    }




    return(
        <div>
            <h1>UseStateHook</h1>
            <input type="text" onChange={(e) =>{setData(Number(e.target.value))}} />
            
            <button onClick={display}>click</button>
            {result}
            

        </div>
    )
}

export default UseStateHook