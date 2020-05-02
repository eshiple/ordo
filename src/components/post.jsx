import React, { Component } from "react";
import "./stylesheets/postStyles.css";

class Post extends Component {
  state = {};

  likeCol = () => {
    let classes = "far fa-thumbs-up ";
    classes += this.props.postInfo.likeStatus === 0 ? "black" : "aqua";
    return classes;
  };

  render() {
    return (
      <div className="onePost">
        <img
          src={
            window.location.origin + "/img" + this.props.postInfo.authorPhoto
          }
          alt="hi"
          className="postPhoto"
        />
        <div className="postContentBody">
          <h3>{this.props.postInfo.postAuthor}</h3>
          <h5>&nbsp;-&nbsp;{this.props.postInfo.time}</h5>
          <p>{this.props.postInfo.text}</p>
        </div>
        <span className="postGap" />
        <div className="expandButton" title="Expand">
          <i className="fas fa-expand-arrows-alt" />
        </div>
        <div className="postButtons" title="Like">
          <div
            onClick={() => this.props.onLike(this.props.postInfo.id)}
            className="postButton"
          >
            <i className={this.likeCol()} />
          </div>
          <div
            className="postButton spamButton"
            title="Report As Spam"
            onClick={() => this.props.onSpam(this.props.postInfo.id)}
          >
            <i className="fas fa-exclamation" />
          </div>
          <div className="postButton" title="Link" onClick={this.props.onLink}>
            <i className="fas fa-link" />
          </div>
          <div
            className="postButton"
            title="See Comments"
            onClick={() => this.props.onShow(this.props.postInfo.id)}
          >
            <p> {this.props.postInfo.commentCount} </p>
            <i className="far fa-comment-alt" />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
