import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom'

import "../../../pages/loginPromoter.tsx"
import LoginPromoter from '../../../pages/loginPromoter';

export default function NavBarHome() {
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home Page</Link>
              </li>
              <li>
                <Link to="/login">Login Page</Link>
              </li>
            </ul>
  
            <Switch>
              <Route path="/login" component={LoginPromoter}>
              </Route>
              <Route path="/home">
                <Home />
              </Route>
            </Switch>
          </div>
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