import React from "react";
import PostSide from "../PostSide/PostSide";
import ProfileSide from "../ProfileSide/ProfileSide";
import "./styles.css";
const styles = () => {
  return (
    <div className="Home">
      <div className="profileSide">
        <ProfileSide />
      </div>
      <div className="postSide">
        <PostSide />
      </div>
      <div className="rightSide">RightSide</div>
    </div>
  );
};

export default styles;
