import React from "react";
import Posts from "../Posts/Posts";
import Share from "./Share";
import "./styles.css";
const PostSide = ({ profile }) => {
  return (
    <div className="PostSide">
      <div>
        <Share />
        <Posts />
      </div>
    </div>
  );
};

export default PostSide;
