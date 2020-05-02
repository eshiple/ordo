import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Menu from "./components/menu";
import Posts from "./components/posts";
import Comments from "./components/comments";

class App extends Component {
  state = {
    menuStatus: 0,
    commentShowStatus: 0,
    currComment: {
      id: 0,
      comments: [
        {
          id: 0,
          commentAuthor: "Eric Shiple",
          time: "2h",
          text: "Default",
          likeCount: 0,
          likeStatus: 0
        },
        {
          id: 1,
          commentAuthor: "Corn Bread",
          time: "10d",
          text: "lame",
          likeCount: 0,
          likeStatus: 0
        }
      ]
    },
    posts: [
      {
        id: 0,
        text: "hello hello",
        time: "2h",
        commentCount: 2,
        likeCount: 0,
        likeStatus: 0,
        postAuthor: "Eric Shiple",
        authorPhoto: "/ProfilePhoto.JPG"
      },
      {
        id: 1,
        text: "I like cookies",
        time: "10h",
        commentCount: 2,
        likeCount: 0,
        likeStatus: 0,
        postAuthor: "Connor Beard",
        authorPhoto: "/connorBeard.jpg"
      },
      {
        id: 2,
        text: "No soup for you",
        time: "2min",
        commentCount: 2,
        likeCount: 0,
        likeStatus: 0,
        postAuthor: "Akarsh Verma",
        authorPhoto: "/akarshVerma.jpg"
      }
    ],
    commentList: [
      {
        id: 0,
        comments: [
          {
            id: 0,
            commentAuthor: "Eric Shiple",
            time: "2h",
            text: "Comment Set 0",
            likeCount: 0,
            likeStatus: 0
          },
          {
            id: 1,
            commentAuthor: "Corn Bread",
            time: "10d",
            text: "I like it",
            likeCount: 0,
            likeStatus: 0
          }
        ]
      },
      {
        id: 1,
        comments: [
          {
            id: 0,
            commentAuthor: "Eric Shiple",
            time: "2h",
            text: "Comment Set 1",
            likeCount: 0,
            likeStatus: 0
          },
          {
            id: 1,
            commentAuthor: "Corn Bread",
            time: "10d",
            text: "lameo",
            likeCount: 0,
            likeStatus: 0
          }
        ]
      },
      {
        id: 2,
        comments: [
          {
            id: 0,
            commentAuthor: "Eric Shiple",
            time: "2h",
            text: "Comment Set 2",
            likeCount: 0,
            likeStatus: 0
          },
          {
            id: 1,
            commentAuthor: "Corn Bread",
            time: "10d",
            text: "lameo",
            likeCount: 0,
            likeStatus: 0
          }
        ]
      }
    ]
  };

  handleCommentLike = (threadId, commentId) => {
    let currComment = this.state.commentList;

    if (currComment[threadId].comments[commentId].likeStatus === 0) {
      console.log("hi");
      ++currComment[threadId].comments[commentId].likeCount;
      currComment[threadId].comments[commentId].likeStatus = 1;
    } else {
      console.log("ho");
      --currComment[threadId].comments[commentId].likeCount;
      currComment[threadId].comments[commentId].likeStatus = 0;
    }
    console.log(threadId, commentId);
    this.setState({ commentList: currComment });
    this.setState({ currComment: this.state.commentList[threadId] });
    console.log(this.state.currComment);
  };

  handlePostLike = id => {
    let posts = this.state.posts;

    if (posts[id].likeStatus === 0) {
      ++posts[id].likeCount;
      posts[id].likeStatus = 1;
    } else {
      --posts[id].likeCount;
      posts[id].likeStatus = 0;
    }

    this.setState({ posts: posts });
  };

  handleHide = postId => {
    const posts = this.state.posts.filter(c => c.id !== postId);
    this.setState({ posts: posts });
  };

  handleCopyLink = () => {
    let popup = document.getElementById("copyLink");
    popup.style.display = "block";
    setTimeout(function() {
      popup.style.opacity = 1;
      popup.style.transition = "opacity .5s linear";
      setTimeout(function() {
        popup.style.opacity = 0;
        popup.style.transition = "opacity .5s linear";
        //popup.style.display = "none";
      }, 1500);
    }, 100);
    // popup.style.set
  };

  handleMenu = () => {
    let menu = document.getElementById("oneMenu");
    if (this.state.menuStatus === 0) {
      menu.style.left = "0%";
      menu.style.transition = "left .2s linear";
      this.setState({ menuStatus: 1 });
    } else {
      menu.style.left = "-20%";
      menu.style.transition = "left .2s linear";
      this.setState({ menuStatus: 0 });
    }
  };

  handleCommentShow = id => {
    let currComment = this.state.commentList[0];
    let commentBox = document.getElementById("commentDiv");

    if (
      this.state.commentShowStatus === 0 ||
      this.state.currComment.id !== id
    ) {
      commentBox.style.display = "block";
      document.getElementById("addCommentBox").value = "";
      this.setState({ commentShowStatus: 1 });
      for (let i = 0; i < this.state.commentList.length; ++i) {
        if (this.state.commentList[i].id === id) {
          currComment = this.state.commentList[i];
          break;
        }
      }
    } else if (this.state.currComment.id === id) {
      commentBox.style.display = "none";
      document.getElementById("addCommentBox").value = "";
      this.setState({ commentShowStatus: 0 });
    }
    this.setState({ currComment });
  };

  render() {
    return (
      <React.Fragment>
        <div id="copyLink">
          <i className="fas fa-link" />
          <h3 style={{ display: "inline-block" }}>&nbsp;Link Copied</h3>
        </div>
        <Header onShow={this.handleMenu} />
        <Menu />
        <div id="components_grid">
          <span />
          <Posts
            posts={this.state.posts}
            onSpam={this.handleHide}
            onLink={this.handleCopyLink}
            onShow={this.handleCommentShow}
            onLike={this.handlePostLike}
          />
          <Comments
            commentThread={this.state.currComment}
            onShow={this.handleCommentShow}
            onLike={this.handleCommentLike}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
