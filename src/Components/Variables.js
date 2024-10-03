import React from "react";

function Variables(){
    const a =90
    let result=0
    
    console.log(a)
    // let b=78
    // b=90
    var c=99
    // var c = 67
    

    c=78
    function add()
    {
        var j=90
        let k=89
        console.log(j+k)
        result=j+k
        
    }
   // console.log(j)
   // console.log(k)


    return(
        <div>
            {a}
            <br />
            <button onClick={add}>add</button>
            {c}
            {result}
            
        </div>
    )
}


export default Variables