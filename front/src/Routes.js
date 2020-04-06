import React from "react";
import { Route } from 'react-router-dom';
import LoginPage from "./containers/LoginPage";
import Signup from "./containers/Signup";
import Oauth from "./containers/Googlesignin";

const BaseRouter = () =>(
    <div>
            <Route exact path = '/' component={LoginPage}/>
            <Route exact path = '/create/' component={Signup}/>
            <Route exact path = '/create2/' component={Oauth}/>
    </div>
);

export default BaseRouter;