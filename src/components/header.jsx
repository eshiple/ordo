import React, { Component } from "react";
import "./stylesheets/headerStyles.css";
class Header extends Component {
  state = {
    imageUrl: window.location.origin + "/img" + "/ProfilePhoto.JPG"
  };
  render() {
    return (
      <div id="header">
        <div className="titleBurger">
          <i
            className="fas fa-bars headerHamburger"
            onClick={this.props.onShow}
          />
          <h1 className="compTitle">p0rtal</h1>
        </div>
        <span />
        <img src={this.state.imageUrl} alt="" id="headerPhoto" />
      </div>
    );
  }
}

export default Header;
