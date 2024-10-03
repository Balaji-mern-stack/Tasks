import React, { useState } from "react";
function Tables(){

    const [num ,setnum]=useState(0)
    const [result ,setresult]=useState()

    let obj = {name:"balaji",
                display: () => {
                    console.log(obj.name)
                }
    }

    obj.display()
    function Multiplication(){
        let arr = []
        let number=1;
        for(let i=1;i<=10;i++){
            number = num*i
            
            console.log(`${num}*${i}=${number}`)
            arr.push(`${num}*${i}=${number}`)
            

        }
        setresult(arr)
}

    return(
        <div>
            <h1>Multiplication</h1>
            <input type="text" onChange={(e)=>{setnum(Number(e.target.value))}}/>
            <button onClick={Multiplication}>click</button>
            {result && result.map(i => (
                <div>{i}</div>
            ))}
             
            {obj.name}


        </div>
    )
}
export default Tables