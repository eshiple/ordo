import React, { Component } from "react";
import headerStyles from "./stylesheets/headerStyles.css";

class Header extends Component {
  state = {
    imageUrl: "./ProfilePhoto.JPG"
  };
  render() {
    return (
      <div id="header">
        <h1 className="compTitle">ordo</h1>
        <span />
        <img
          src={require("./ProfilePhoto.JPG")}
          alt=""
          styleName="profilePhoto"
        />
      </div>
    );
  }
}

export default Header;
