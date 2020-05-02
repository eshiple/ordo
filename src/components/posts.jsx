import React, { Component } from "react";
import Post from "./post";

class Posts extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <Post
            key={post.id}
            postInfo={post}
            onSpam={this.props.onSpam}
            onLink={this.props.onLink}
            onShow={this.props.onShow}
            onLike={this.props.onLike}
          />
        ))}
      </div>
    );
  }
}

export default Posts;
