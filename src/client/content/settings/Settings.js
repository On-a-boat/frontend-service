//create a settings page that will have change password, change email, and change username buttons
import React from "react";
import * as s from "./Settings.styles"; // bring in all the components from app.styles.js

const Settings = () => {
  return (
    <s.Settings>
      <s.SettingsHeader>
        <s.SettingsHeaderTitle>Settings</s.SettingsHeaderTitle>
      </s.SettingsHeader>
      <s.SettingsBody>
        <s.SettingsBodyTitle>
          <s.SettingsBodyTitleText>Change Email</s.SettingsBodyTitleText>
        </s.SettingsBodyTitle>
        <s.SettingsBodyTitle>
          <s.SettingsBodyTitleText>Change Password</s.SettingsBodyTitleText>
        </s.SettingsBodyTitle>
      </s.SettingsBody>
    </s.Settings>
  );
};

export default Settings;
