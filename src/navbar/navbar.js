import  React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        
<div className="topnav">
  <Link className="a" to="/">Signup</Link>
  <Link className="a" to="/SignIn">signin</Link>
  <Link className="a" to="/Twiter">Home</Link>

  
  
</div>

      
    )
}


export default Navbar;