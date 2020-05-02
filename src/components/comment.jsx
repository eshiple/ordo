import React, { Component } from "react";
import "./stylesheets/commentStyles.css";

class Comment extends Component {
  state = {};

  likeCol = () => {
    let classes = "commentLikeButton ";
    classes += this.props.commentInfo.likeStatus === 0 ? "black" : "aqua";
    console.log("like status: ", this.props.commentInfo.likeStatus);
    return classes;
  };

  render() {
    return (
      <div className="oneComment">
        <h3 className="commentAuthor">
          {this.props.commentInfo.commentAuthor}
        </h3>
        <h5>&nbsp;-&nbsp;{this.props.commentInfo.time}&nbsp;-&nbsp;</h5>
        <h5
          className={this.likeCol()}
          onClick={() => this.props.onLike(this.props.commentInfo.id)}
        >
          Like
        </h5>
        <p>{this.props.commentInfo.text}</p>
      </div>
    );
  }
}

export default Comment;
