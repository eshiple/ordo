import React, { Component } from "react";
import "./stylesheets/postStyles.css";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="onePost">
        <i className="far fa-arrow-alt-circle-up" />
        <i className="far fa-arrow-alt-circle-down" />
        <img src={require("./ProfilePhoto.JPG")} alt="" id="profilePhoto" />
        <p>hello</p>
        <p>darkness</p>
      </div>
    );
  }
}

export default Post;
