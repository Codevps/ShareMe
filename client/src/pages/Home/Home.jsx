import React from "react";
import ProfileSide from "../ProfileSide/ProfileSide";
import "./styles.css";
const styles = () => {
  return (
    <div className="Home">
      <div className="profileSide"><ProfileSide/></div>
      <div className="postSide">Post</div>
      <div className="rightSide">RightSide</div>
    </div>
  );
};

export default styles;
