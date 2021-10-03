import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Settings from "./client/content/settings/Settings";
import CRM from "./client/content/CRM/CRM";
import Groups from "./client/content/groups/Groups";
import Statistics from "./client/content/statistics/Statistics";
import Email from "./client/content/email/Email";
const RootSPA = () => {
  return (
    <Switch>
      <Route exact path="/" component={CRM} />
      <Route exact path="/groups" component={Groups} />
      <Route exact path="/email" component={Email} />
      <Route exact path="/statistics" component={Statistics} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  );
};

export default RootSPA;
