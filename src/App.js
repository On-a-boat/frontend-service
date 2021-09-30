import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as s from './App.styles'; // bring in all the components from app.styles.js 
import Sidebar from './client/sidebar/Sidebar';
import Main from './client/content/Main';


function App() {

  const bgImage = 'images/mountain.jpg'
  // const menuItems = ['CRM', 'Groups', 'Statistics', 'Settings'];
  const menuItems = [
    { name: 'CRM', to: '/', icon: '' },
    { name: 'Groups', to: '/groups', icon: 'icons/groups.svg' },
    { name: 'Statistics', to: '/statistics', icon: '' },
    { name: 'Settings', to: '/settings', icon: 'icons/settings.svg' }];

  return (
    <s.App>
      <Sidebar
        ddd={bgImage}
        menuItems={menuItems} />
      <Main />

    </s.App>

  );

}


export default App;
