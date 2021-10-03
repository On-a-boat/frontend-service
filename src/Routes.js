import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Settings from './client/content/settings/Settings';
import CRM from './client/content/CRM/CRM';
import Groups from './client/content/groups/Groups';
import Statistics from './client/content/statistics/Statistics';
import Login from './client/content/login/Login.js';

const RootSPA = () => {
    return (
        <Switch>
            <Route exact path='/' component={CRM} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/groups' component={Groups} />
            <Route exact path='/settings' component={Settings} />
            <Route exact path='/statistics' component={Statistics} />
        </Switch>
    )
}

export default RootSPA