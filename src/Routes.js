import React from "react";
import { Switch, Route } from "react-router-dom";

//Sidebar
import Sidebar from "./client/sidebar/Sidebar";
// Components
import Settings from "./client/content/settings/Settings";
import CRM from "./client/content/CRM/CRM";
import Groups from "./client/content/groups/Groups";
import Statistics from "./client/content/statistics/Statistics";
import Login from "./client/content/login/Login.js";

//Sidebar Details
const bgImage = "images/mountain.jpg";
// const menuItems = ['CRM', 'Groups', 'Statistics', 'Settings'];
const menuItems = [
  { name: "CRM", to: "/", icon: "" },
  { name: "Groups", to: "/groups", icon: "icons/groups.svg" },
  { name: "Statistics", to: "/statistics", icon: "" },
  { name: "Settings", to: "/settings", icon: "icons/settings.svg" },
];

const RootSPA = () => {
  return (
    <>
      <Sidebar ddd={bgImage} menuItems={menuItems} />
      <Switch>
        <Route exact path="/" component={CRM} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/groups" component={Groups} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/statistics" component={Statistics} />
      </Switch>
    </>
  );
};

export default RootSPA;
