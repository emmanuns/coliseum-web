import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import RegisterUser from "./pages/registerUser"

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/register" component={RegisterUser}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;  
