import React from "react";
// import { Form} from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Userid(){
    return(
        <div>
           <form>
            <label>user Name</label>
            <input type="text" placeholder="enter ur name"  />
            <input type="email" />
            <button type="submit">click</button>
            


           </form>
           
        </div>
    )
}
export default Userid