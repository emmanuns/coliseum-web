import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPromoter from "./pages/loginPromoter";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginPromoter}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;  