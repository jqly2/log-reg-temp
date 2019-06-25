import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './login.js';
import Reg from './registration';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/reg/">Registration</Link>
            </li>
          </ul>
          <Route path="/" exact component={Login} />
          <Route path="/reg/" component={Reg} />
        </nav>
      </div>
    </Router>
  );
}

export default AppRouter;