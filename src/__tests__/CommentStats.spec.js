import React from "react";
import { create } from "react-test-renderer";
import CommentStats from "../components/CommentStats";

// function CommentStats(props) {
//   return (
//     <li className="grey-txt">
//       <a className="icons">{props.children}</a>
//     </li>
//   );
// }

describe("CommentStats component", () => {
  test("Matches the snapshot", () => {
    const CommentStats = create(<CommentStats />);
    expect(CommentStats.toJSON()).toMatchSnapshot();
  });
});
