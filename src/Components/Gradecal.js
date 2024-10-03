import React, { useState } from "react";
function Grade(){

    const [num ,setnum]=useState(null)
    const [result, setresult]=useState()

    function Grade(num){
        switch (true) {
            case (num>=90):
                return 'A'
                break;
            case (num>=80):
                return'B'
                break;
            case (num>=70):
                return'C'
                break;
            case (num>=60):
                return'D'
                break;
        
            default:
                return'F'
                break;
        }
    }
    // console.log(Grade(80));
    function graderesult(){
        setresult(Grade(num))
    }

    return(
        <div>
            <h1>Grades</h1>
            <input type="text" onChange={(e)=>{setnum(Number(e.target.value))}}/>
            <button onClick={graderesult}>click</button>
            {result}
        </div>
    )
}
export default Grade