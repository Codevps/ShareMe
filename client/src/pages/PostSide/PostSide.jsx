import React from "react";
import Share from "./Share";
import Post from "../Posts/Post/Post.jsx";
import "./styles.css";
const PostSide = () => {
  return (
    <div className="PostSide">
      <div>
        <Share />
        <Post />
        {/* defined for user: */}
        {/* profile photo here: */}
      </div>
    </div>
  );
};

export default PostSide;
