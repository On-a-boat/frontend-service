import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as s from "./Sidebar.styles"; // bring in all the components from app.styles.js
import { Link } from "react-router-dom";
import { pathToName } from "../constants/pathname";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import EmailIcon from "@material-ui/icons/Email";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import PersonIcon from "@material-ui/icons/Person";
import useMediaQuery from "@mui/material/useMediaQuery";

const IconComponents = {
  CRM: HomeIcon,
  Groups: GroupIcon,
  Email: EmailIcon,
  Statistics: EqualizerIcon,
  Settings: SettingsInputComponentIcon,
};

const Sidebar = (props) => {
  const location = useLocation();
  // always initialise
  const { ddd = "", menuItems = [] } = props;
  const header = "On a Boat";
  const matches = useMediaQuery("(min-width:600px)");

  //used constants pathToName to change to name
  const [selected, setSelectedMenuItem] = useState(
    pathToName[location.pathname]
  );

  const handleMenuItemClick = (name) => {
    setSelectedMenuItem(name);
  };

  const MenuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;
    const IconComponent = IconComponents[item.name];

    return (
      <Link to={item.to} style={{ textDecoration: "none" }}>
        <s.MenuItem
          key={index}
          selected={isItemSelected}
          onClick={() => handleMenuItemClick(item.name)}
        >
          <s.Icon>
            <IconComponent style={{ color: "#9EA7B2" }} />
          </s.Icon>
          {matches && <s.Text>{item.name}</s.Text>}
        </s.MenuItem>
      </Link>
    );
  });

  return (
    <s.SideBarContainer backgroundImage={ddd}>
      <s.SidebarHeaderWrapper>
        <s.SidebarHeader>{header}</s.SidebarHeader>
      </s.SidebarHeaderWrapper>
      <s.MenuItemContainer>{MenuItemsJSX}</s.MenuItemContainer>
      <s.SidebarFooterWrapper>
        <s.SidebarFooter>
          <s.Icon>
            <PersonIcon />
          </s.Icon>
          {matches && <s.Name>John Doe</s.Name>}
        </s.SidebarFooter>
      </s.SidebarFooterWrapper>
    </s.SideBarContainer>
  );
};

export default Sidebar;
