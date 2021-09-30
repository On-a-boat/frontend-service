import React, { useState } from 'react';
import * as s from './Sidebar.styles'; // bring in all the components from app.styles.js 
import { Link } from 'react-router-dom';


const Sidebar = props => {


    // always initialise 
    const { ddd = '', menuItems = [] } = props

    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);

    const handleMenuItemClick = name => {
        setSelectedMenuItem(name);
    }

    const header = "On a Boat";
    const MenuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;

        return (
            <Link to={item.to} style={{ textDecoration: 'none' }}>
                <s.MenuItem
                    key={index}
                    selected={isItemSelected}
                    onClick={() => handleMenuItemClick(item.name)}
                >
                    <s.Icon src={item.icon} />
                    <s.Text>{item.name}</s.Text>
                </s.MenuItem></Link>)
    })



    return (
        <s.SideBarContainer backgroundImage={ddd}>
            <s.SidebarHeader>{header}</s.SidebarHeader>
            <s.MenuItemContainer>{MenuItemsJSX}</s.MenuItemContainer>
        </s.SideBarContainer>
    );
}

export default Sidebar;



