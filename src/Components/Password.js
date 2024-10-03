import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Password(){
   let  Navigate=useNavigate()

    async  function  handle(){
            const { value: email } = await Swal.fire({
                title: "Input email address",
                input: "email",
                inputLabel: "Your email address",
                inputPlaceholder: "Enter your email address"
              });
              if (email) {
                 Navigate ('/Save',{state:email})
                //  Swal.fire(`Entered email: ${email}`);
              }
        }

    return(
        <div>
           <button onClick={handle}>submit</button>
           
        </div>
    )
}
export default Password