import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import SignUp from "../components/sign-up";
import SignIn from "../components/Sign-In"

 import Navbar from "../navbar/navbar";
import Twiter from "../components/twiter/twiter";



function ReactRouter() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <SignUp />
                </Route>
                <Route path='/SignIn'>
                    <SignIn />
                </Route>
                <Route path='/Twiter'>
                    <Twiter/>
                </Route>
              
                
                
              
            </Switch>
        </Router>
    )
}

export default ReactRouter;