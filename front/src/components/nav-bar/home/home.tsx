import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom'


import Logo from '../../../assets/image/logo.png';   
import RegisterPromoter from '../../../pages/registerPromoter';
import {NavBarMargin, LogoMargin, OptionsMargin} from "../../../styles/components/homeNav";

export default function NavBarHome() {
    return (
        <Router>
            <NavBarMargin> 
                <LogoMargin>
                        <Link to="/home"> <img src={Logo}/> </Link>
                </LogoMargin>
                    <OptionsMargin>
                        <Link to="/register">Cadastrar conta</Link>
                        <Link to=""> Baixe o app</Link>
                    </OptionsMargin>
                    <Switch>
                    <Route path="/register" component={RegisterPromoter}>
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    </Switch>
            </NavBarMargin>
        </Router>
    
    );
  }

  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }