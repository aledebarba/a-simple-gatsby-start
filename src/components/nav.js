import React from 'react';
import { bubble as Menu } from "react-burger-menu";

const Nav = () => {
    return (
    <Menu pageWrapId={ "page-wrap-layout" }
    outerContainerId={ "outer-container-layout" }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="about">About</a>
        <a id="contact" className="menu-item" href="contact">Contact</a>
        <a className="menu-item--small" href="/">Settings</a>
    </Menu>
);
}
 
export default Nav;
