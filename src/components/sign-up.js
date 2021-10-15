import React, { useState,useContext } from 'react';
import { Link,useHistory } from "react-router-dom";
import "./signin.css"
import img from "../img/user.jpg"
import { auth, createUserWithEmailAndPassword, db,doc ,setDoc} from '../routes/firebase';
import {GlobalContext} from "../context/context"


function SignUp() {
    const {state,dispatch}= useContext(GlobalContext);
 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
  



  

        const register = async () => {
            try {
                console.log({ email, pass})
                
                let { user } = await createUserWithEmailAndPassword(auth, email, pass);
                let dataRef = doc(db, 'users', user.uid)
                
                await setDoc(dataRef, {
                    email: user.email,
                    uid: user.uid,
                });
               
              
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
              <h1>Sign Up Now</h1>


 <input type="email" className="input-box" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Your-Email"></input>
 <input type="password" className="input-box" onChange={(event)=>{setPass(event.target.value)}} placeholder="Your-Password"></input>
 <button className="sing-btn"onClick={ register}>Sign Up</button>
                  <Link to="/">Sign In</Link>
             {errMsg ? <p>{errMsg}</p> : null}
        </div>
    )
}


export default SignUp;





































