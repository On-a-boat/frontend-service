import React from "react";
import { Switch, Route } from "react-router-dom";

//Sidebar
import Sidebar from "./client/sidebar/Sidebar";
// Components
import Settings from "./client/content/settings/Settings";
import CRM from "./client/content/crm/CRM";
import Groups from "./client/content/groups/Groups";
import Statistics from "./client/content/statistics/Statistics";
import Email from "./client/content/email/Email";

//Sidebar Details
const bgImage = "images/mountain.jpg";
// const menuItems = ['CRM', 'Groups', 'Statistics', 'Settings'];
const menuItems = [
  { name: "CRM", to: "/", icon: "" },
  { name: "Groups", to: "/groups", icon: "icons/groups.svg" },
  { name: "Statistics", to: "/statistics", icon: "" },
  { name: "Settings", to: "/settings", icon: "icons/settings.svg" },
  { name: "Email", to: "/email", icon: "icons/email.svg" },
];

const RootSPA = () => {
  return (
    <>
      <Sidebar ddd={bgImage} menuItems={menuItems} />
      <Switch>
        <Route exact path="/" component={CRM} />
        <Route exact path="/groups" component={Groups} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/email" component={Email} />
        <Route exact path="/statistics" component={Statistics} />
      </Switch>
    </>
  );
};

export default RootSPA;
