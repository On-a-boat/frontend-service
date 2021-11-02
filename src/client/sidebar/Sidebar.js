import React, { useState, useEffect, useContext } from "react";
import { AnimatePresence} from "framer-motion";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context.js";
import * as s from "./Sidebar.styles";


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
    const IconComponent = item.icon;
    const hasSubmenus = !!item.subMenuItems.length;
    const isOpen = subMenusStates[index]?.isOpen;

    const subMenusJSX = item.subMenuItems.map(
      (subMenuItem, subMenuItemIndex) => {
        const isSubmenuItemSelected =
          subMenusStates[index]?.selected === subMenuItemIndex;

        return (
          <Link to={`${subMenuItem.to}`} key={subMenuItemIndex}>
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
      <React.Fragment key={index}>
        <Link to={item.to}>
          <s.MenuItem
            onClick={() => handleMenuItemClick(item.name, index)}
            isSidebarOpen={isSidebarOpen}
            isOpen={isOpen}
          >
            <s.MenuIcon>
              <IconComponent isSidebarOpen={isSidebarOpen}/>
            </s.MenuIcon>
            <s.MenuText isSidebarOpen={isSidebarOpen}>{item.name}</s.MenuText>
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

        <AnimatePresence>
          {hasSubmenus && isOpen && (
            <s.SubMenuItemContainer
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -30 }}
              isSidebarOpen={isSidebarOpen}
            >
              {subMenusJSX}
            </s.SubMenuItemContainer>
          )}
        </AnimatePresence>
      </React.Fragment>
    );
  });


  return (
    <s.SidebarContainer isSidebarOpen={isSidebarOpen}>
      <s.SidebarHeader/>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
