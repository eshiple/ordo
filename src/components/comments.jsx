import React, { Component } from "react";
import Comment from "./comment";
import "./stylesheets/commentsStyles.css";

class Comments extends Component {
  state = {};

  handleCommentLike = id => {
    this.props.onLike(this.props.commentThread.id, id);
  };

  render() {
    return (
      <div className="commentsBox" id="commentDiv">
        <div className="commentsBackground">
          <i
            className="fas fa-times commentsExit"
            title="Hide Comments"
            onClick={() => this.props.onShow(this.props.commentThread.id)}
          />
          {this.props.commentThread.comments.map(comment => (
            <Comment
              key={comment.id}
              commentInfo={comment}
              onLike={this.handleCommentLike}
            />
          ))}
          <input
            className="commentsSubmit"
            id="addCommentBox"
            type="text"
            placeholder="Add a comment..."
          />
          <h4 className="commentButton">Post</h4>
        </div>
      </div>
    );
  }
}

export default Comments;
