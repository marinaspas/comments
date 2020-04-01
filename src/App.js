import React from "react";
import Comments from "./components/comments";
import "./App.css";
import "./reset.css";
import comments from "./comments.json";

function App() {
  return (
    <div className="App">
      <div className="comment-wrap">
        <Comments comments={comments} />
      </div>
    </div>
  );
}

export default App;
