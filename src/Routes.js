import React, { useCallback, useState } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { UserContext } from "./Context";
import { menuItems } from "./client/constants/pathname";

//Sidebar
import Sidebar from "./client/sidebar/Sidebar";
// Components
import Settings from "./client/content/settings/Settings";
import CRM from "./client/content/crm/CRM";
import Groups from "./client/content/groups/Groups";
import Statistics from "./client/content/statistics/Statistics";
import Email from "./client/content/email/Email";
import Login from "./client/content/login/Login.js";
import UserProfile from "./client/content/crm/UserProfile";
import EmailStatistics from "./client/content/statistics/EmailStatistics";
import UserStatistics from "./client/content/statistics/UserStatistics";
import GroupDetail from "./client/content/groups/GroupsDetail";
//Sidebar Details
const bgImage = "images/mountain.jpg";
// const menuItems = ['CRM', 'Groups', 'Statistics', 'Settings'];

const RootSPA = () => {
  const location = useLocation();
  const [token, setToken] = useState(null);

  const login = useCallback((token) => {
    setToken(token);
    localStorage.setItem("userData", JSON.stringify(token));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.clear();
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          login: login,
          logout: logout,
        }}
      >
        {!location.pathname.includes("login") && (
          <Sidebar ddd={bgImage} menuItems={menuItems} />
        )}
        <Switch>
          <Route exact path="/crm" component={CRM} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/"
            render={() =>
              token ? <Redirect to="/crm" /> : <Redirect to="/login" />
            }
          />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/email" component={Email} />
          {/* <Route exact path="/statistics" component={Statistics} /> */}
          <Route exact path="/statistics/users" component={UserStatistics} />
          <Route exact path="/statistics/email" component={Email} />
          <Route
            exact
            path="/statistics/email/:a"
            component={EmailStatistics}
          />
          <Route
            exact
            path="/userprofile/:a([0-9]+)"
            component={UserProfile}
          ></Route>
          <Route
            exact
            path="/groups/:a([0-9]+)"
            component={GroupDetail}
          ></Route>
        </Switch>
      </UserContext.Provider>
    </>
  );
};

export default RootSPA;
