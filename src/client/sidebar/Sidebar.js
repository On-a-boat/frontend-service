import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as s from "./Sidebar.styles";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ArrowLeft from "@material-ui/icons/ArrowBack";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import PersonIcon from "@material-ui/icons/Person";
import { UserContext } from "../../Context.js";

const IconComponents = {
  Home: HomeIcon,
  Users: PersonIcon,
  Groups: GroupIcon,
  Statistics: EqualizerIcon,
  Settings: SettingsInputComponentIcon,
  Logout: ArrowLeft,
};

const Sidebar = (props) => {
  const {
    menuItems = [],
  
  } = props;

  const auth = useContext(UserContext);

  // State
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [subMenusStates, setSubmenus] = useState({});
  
  // Add index of items that contain sub menu items
  useEffect(() => {
    const newSubmenus = {};

    menuItems.forEach((item, index) => {
      const hasSubmenus = !!item.subMenuItems.length;

      if (hasSubmenus) {
        newSubmenus[index] = {};
        newSubmenus[index]["isOpen"] = false;
        newSubmenus[index]["selected"] = null;
      }
    });

    // Set selected submenu if user landed on one
    const path = window.location.pathname;
    const parts = path.split("/");

    if (parts.length === 3) {
      const selectedItem = parts[1].toLowerCase();
      const selectedSubItem = parts[2].toLowerCase();
      const selectedItemIndex = menuItems.findIndex(
        (item) => item.name.toLowerCase() === selectedItem
      );
      const selectedSubItemIndex = menuItems[
        selectedItemIndex
      ]?.subMenuItems.findIndex(
        (subItem) => subItem.name.toLowerCase() === selectedSubItem
      );
      try {
        if (selectedItemIndex !== -1)
          newSubmenus[selectedItemIndex]["isOpen"] = true;
        if (selectedItemIndex !== -1 && selectedSubItemIndex !== -1)
          newSubmenus[selectedItemIndex]["selected"] = selectedSubItemIndex;
      } catch (error) {}
    }

    Object.keys(subMenusStates).length === 0 && setSubmenus(newSubmenus);
  }, [menuItems, subMenusStates]);

  const handleMenuItemClick = (name, index) => {
    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

    //logout
    if (name === "Logout") {
      auth.logout();
    }

    if (subMenusStates.hasOwnProperty(index)) {
      subMenusCopy[index]["isOpen"] = !subMenusStates[index]["isOpen"];
      setSubmenus(subMenusCopy);
    } else {
      for (let item in subMenusStates) {
        subMenusCopy[item]["isOpen"] = false;
        subMenusCopy[item]["selected"] = null;
      }
      setSubmenus(subMenusCopy);
    }
  };

  const handleSubMenuItemClick = (menuItemIdx, subMenuItemIdx) => {
    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));
    subMenusCopy[menuItemIdx]["selected"] = subMenuItemIdx;

    setSubmenus(subMenusCopy);
  };

  const menuItemsJSX = menuItems.map((item, index) => {
    const IconComponent = IconComponents[item.name];
    const hasSubmenus = !!item.subMenuItems.length;
    const isOpen = subMenusStates[index]?.isOpen;

    const subMenusJSX = item.subMenuItems.map(
      (subMenuItem, subMenuItemIndex) => {
        const isSubmenuItemSelected =
          subMenusStates[index]?.selected === subMenuItemIndex;

        return (
          <Link
            to={`${subMenuItem.to}`}
            style={{ textDecoration: "none" }}
            key={subMenuItemIndex}
          >
            <s.SubMenuItem
              onClick={() => handleSubMenuItemClick(index, subMenuItemIndex)}
              selected={isSubmenuItemSelected}
            >
              {subMenuItem.name}
            </s.SubMenuItem>
          </Link>
        );
      }
    );

    return (
      <s.ItemContainer key={index}>
        <Link to={item.to} style={{ textDecoration: "none" }}>
          <s.MenuItem
            onClick={() => handleMenuItemClick(item.name, index)}
            isSidebarOpen={isSidebarOpen}
            isOpen={isOpen}
          >
            <s.Icon>
              <IconComponent style={{ color: "#9EA7B2" }} />
            </s.Icon>
            <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon} />
            <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
            {/* {hasSubmenus && isSidebarOpen && (
              <s.DropdownIcon
                selected={isItemSelected}
                isOpen={isOpen}
                colorPalette={colorPalette}
              >
                ^
              </s.DropdownIcon>
            )} */}
          </s.MenuItem>
        </Link>

        {/* Display submenus if they exist  */}
        <AnimatePresence>
          {hasSubmenus && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <s.SubMenuItemContainer
                isSidebarOpen={isSidebarOpen}
              >
                {subMenusJSX}
              </s.SubMenuItemContainer>
            </motion.nav>
          )}
        </AnimatePresence>
      </s.ItemContainer>
    );
  });

  return (
    <s.SidebarContainer
      isSidebarOpen={isSidebarOpen}
    >
      <s.SidebarHeader/>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
