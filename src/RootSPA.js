import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export function RootSPA() {
  return (
    <Router>
      <Switch>
        <Route path="/customer" exact></Route>
      </Switch>
    </Router>
  );
}

export default RootSPA;
