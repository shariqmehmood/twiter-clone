import React, { useState, useContext } from 'react';
import img from "../img/user.jpg"
import "./signin.css"

import { auth, signInWithEmailAndPassword} from '../routes/firebase';


import  {Link, useHistory}  from "react-router-dom";


function SignIn() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
      
    const history = useHistory(); 

    
    
    
    
    const sign = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, pass);
                history.push('./Twiter')
                setErrMsg("user auth sucess");
                setTimeout(() => {
                    setErrMsg('');
                }, 5000)
                
                
            } catch (err) {
                setErrMsg(err.message);
                setTimeout(() => {
                    setErrMsg('');
                }, 5000)
            }
        }
        
        
    return (
       


        <div className="signup-form-div">
        <img className="img" src={img} alt=""></img>
     <h1>Sign In Now</h1>
 <input type="email" className="input-box" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Your-Email"></input>
 <input type="password" className="input-box" onChange={(event)=>{setPass(event.target.value)}} placeholder="Your-Password"></input>
 <button className="sing-btn"onClick={sign}>Sign Up</button>
                 
             {errMsg ? <p>{errMsg}</p> : null}
        </div>
    )
}


export default SignIn;
