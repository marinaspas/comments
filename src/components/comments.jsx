import React, { Component } from "react";
import avatar from "../images/sample_user.png";
import caratUp from "../images/up-chevron.png";
import caratDown from "../images/down-chevron.png";
import comments from "../comments.json";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.comments.items.map(comment => (
          <>
            <img src={comment.avatar} alt="a man smiling" className="avatar" />
            <div className="post">
              <ul className="post-info">
                <li>
                  <h4>{comment.username}</h4>
                </li>
                <li>
                  <span className="badge author">{comment.user_type}</span>
                </li>
                <li>
                  <em className="grey-txt">&#8226;</em>
                  <span className="grey-txt">
                    {" "}
                    {comment.time_ago} minutes ago
                  </span>
                </li>
              </ul>
              <p className="comment-txt">{comment.text}</p>
              <ul className="feedback-list">
                <li className="grey-txt">
                  <a className="icons">reply</a>
                </li>
                <li className="grey-txt">
                  <a className="icons">
                    <span>{comment.replies_num}</span> replies
                  </a>
                </li>
                <li className="grey-txt">
                  <a className="icons">
                    <img src={caratUp} alt="carat up" className="carats" />
                    <span> {comment.upvotes_num}</span>
                  </a>
                </li>
                <li className="grey-txt">
                  <a className="icons">
                    <img src={caratDown} alt="carat down" className="carats" />
                    <span> {comment.downvotes_num}</span>
                  </a>
                </li>
              </ul>
            </div>
          </>
        ))}
      </div>
    );
  }
}

export default Comment;
