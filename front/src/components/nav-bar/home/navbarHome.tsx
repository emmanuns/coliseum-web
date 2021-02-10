import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom'


import Logo from '../../../assets/image/logo.png';   
import RegisterPromoter from '../../../pages/registerPromoter';
import Home from '../../../pages/home';
import {NavBarMargin, LogoMargin, OptionsMargin} from "../../../styles/components/homeNav";

export default function NavBarHome() {
    return (
        <Router>
            <NavBarMargin> 
                <LogoMargin>
                        <Link to=""> <img src={Logo}/> </Link>
                </LogoMargin>
                    <OptionsMargin>
                        <Link to="/register">Cadastrar conta</Link>
                        <Link to=""> Baixe o app</Link>
                    </OptionsMargin>
                    <Switch>
                    <Route path="/register" component={RegisterPromoter}>
                    </Route>
                    <Route path="">
                        <Home />
                    </Route>
                    </Switch>
            </NavBarMargin>
        </Router>
    
    );
  }