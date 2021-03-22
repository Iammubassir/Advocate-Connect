import React, { useState }from 'react';
import "./Login.css"
import { auth, provider } from "../../firebase";
import { Link } from "react-router-dom";

function Client() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [UserName, setUserName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    // const [EmailError, setEmailError] = useState("");
    // const [PasswordError, setPasswordError] = useState("");
  
  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setUserName('');
    setPhoneNumber('');
  }
    
    // const clearErrors = () => {
    //   setEmailError('');
    //   setPasswordError('');
    // }

    // const signIn = () => {
    //   auth.signInWithPopup(provider).catch((e) => {
    //     alert(e.message);
    //   });
    // };

     
    const registerSignIn = (e) => {
      
      e.preventDefault();
  
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            console.log(auth);
            alert('Registered Successfully');
            clearInputs();
          }
        })
        .catch((err )=> {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              // setEmailError(err.message);
              break;
            case "auth/weak-password":
              // setPasswordError(err.message);
              break;
              // no default
              setEmail("");
              setPassword("");

          }
        }
      )
    };
    return(
            
        <div className="hero">
            <form className="form">
            <h1 className="head">CLIENT</h1>
            <input type="text" 
                id="input-field" 
                name="User Name"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
                value={UserName}
                />

                <input type="text" 
                     id="input-field" 
                    name="email"
                    placeholder="Email Id"
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    />
                
                <input type="number" 
                id="input-field" 
                name="PhoneNumber"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)} 
                value={PhoneNumber}
                />

             <input type="password" 
                id="input-field" 
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create Password"
                value={password} 
                />
                 <input type="checkbox" className="check-box" /><span>Remember Password</span>
                
                <button className="submit" onClick={registerSignIn}>Register</button>

                <div className="link">Already Member? <span ><Link to="/Login"><big>Login</big></Link></span></div>

             
            </form>
        </div>
    )
}

export default Client;