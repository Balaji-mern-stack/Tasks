import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Basic(){
    return(
      <div>
        <h1>welcome</h1>
        <Link to='/factorial'>
        <button>Go To Factorial</button>
        </Link><br/>
        <Link to='/prime'>
        <button>Go To Prime</button>
        </Link><br/>
        <Link to='/grades'>
        <button>Go To Grades</button>
        </Link><br/>
        <Link to='/bmi'>
        <button>Go To bmi</button>
        </Link><br/>
        <Link to='/Ramdomnumber'>
        <button>Go To Random</button>
        </Link><br/>
        <Link to='/agecalci'>
        <button>Go To Agecalci</button>
        </Link><br/>
        <Link to='/NavigateSender'>
        <button>Go To sender</button>
        </Link><br/>
        <Link to='/Removeduplicate'>
        <button>Go To Duplicate</button>
        </Link><br/>
        <Link to='/String'>
        <button>Go To String</button>
        </Link><br/>
       <Link to='/Vowels'>
        <button>Go To Vowels</button>
        </Link><br/>
        <Link to='/Game'>
        <button>Go To Game</button>
        </Link>
        </div>
      
    )
}

export default Basic