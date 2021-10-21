import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./client/shared/NavigationBar/NavigationBar"
import Main from "./client/pages/Main/Main";
import Login from "./client/pages/Login/Login"; 

export function RootSPA() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Main />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>


      </Switch>
    </Router>
  );
}

export default RootSPA;