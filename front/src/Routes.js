import React from "react";
import { Route } from 'react-router-dom';
import LoginPage from "./containers/LoginPage";
import Signup from "./containers/Signup";
import Oauth from "./containers/Googlesignin";
import NewBlog from "./containers/NewBlog"
const BaseRouter = () =>(
    <div>
            <Route exact path = '/login' component={LoginPage}/>
            <Route exact path = '/signup/' component={Signup}/>
            <Route exact path = '/create2/' component={Oauth}/>
            <Route exact path = '/createnew/' component={NewBlog} />
    </div>
);

export default BaseRouter;