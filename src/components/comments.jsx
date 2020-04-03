import React, { Component } from "react";
import caratUp from "../images/up-chevron.png";
import caratDown from "../images/down-chevron.png";
import CommentStats from "./commentStats";

class Comment extends Component {
  render() {
    return (
      <>
        {this.props.comments.items.map(comment => (
          <div className="comment" key={comment.id}>
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
                <CommentStats>
                  <span>reply</span>
                </CommentStats>

                <CommentStats>
                  <span>{comment.replies_num}</span> replies
                </CommentStats>

                <CommentStats>
                  <img src={caratUp} alt="carat up" className="carats" />
                  <span> {comment.upvotes_num}</span>
                </CommentStats>

                <CommentStats>
                  <img src={caratDown} alt="carat down" className="carats" />
                  <span> {comment.downvotes_num}</span>
                </CommentStats>
              </ul>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Comment;
