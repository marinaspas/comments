import React from "react";

function CommentStats(props) {
  return (
    <li className="grey-txt">
      <a className="icons">{props.children}</a>
    </li>
  );
}

export default CommentStats;
