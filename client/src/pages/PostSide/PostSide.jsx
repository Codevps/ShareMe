import React from "react";
import Share from "./Share";
import Post from "../Posts/Post/Post.jsx";
import "./styles.css";
const PostSide = ({ profile }) => {
  return (
    <div className="PostSide">
      <div>
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default PostSide;
