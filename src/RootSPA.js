import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./client/pages/Main/Main";

export function RootSPA() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default RootSPA;
