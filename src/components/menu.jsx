import React, { Component } from "react";
import "./stylesheets/menuStyles.css";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="menu" id="oneMenu">
        <h1 className="menuTitle">Menu</h1>
        <ul className="menuList">
          <li>Forum</li>
          <li>Showcase</li>
          <li>Market</li>
        </ul>
        <ul className="menuList">
          <li>Settings</li>
          <li>Log Out</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
