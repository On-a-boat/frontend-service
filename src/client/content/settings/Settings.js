//create a settings page that will have change password, change email, and change username buttons
import React from "react";
import * as s from "./Settings.styles"; // bring in all the components from app.styles.js

const Settings = () => {
  return (
    <s.Settings>
      <s.SettingsHeader>
        <s.SettingsHeaderTitle>
          Settings (Planned in next release)
        </s.SettingsHeaderTitle>
      </s.SettingsHeader>

      <h3>Under Construction</h3>
    </s.Settings>
  );
};

export default Settings;
