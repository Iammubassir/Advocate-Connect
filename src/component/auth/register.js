import React from "react";
import  "../../App";
import "./Login.css";
import { Link } from 'react-router-dom';


const Register = () => {
       
   return(
        <div >
            <form className="box">
                    <h1>Register As</h1>
                     
                            <Link className="list" to="/Client">
                                 <button type="button" value="CLIENT">CLIENT</button>
                            </Link>
                    
                    
                             <Link className="list" to="/Advocate">
                                    <button type="button" value="ADVOCATE">ADVOCATE</button>
                             </Link>
                   
             </form> 
         </div> 
    );
}

export default Register;