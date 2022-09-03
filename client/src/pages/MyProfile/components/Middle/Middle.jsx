import React from "react";
import HeadInfo from "./HeadInfo";
import PostSide from "../../../PostSide/PostSide";

const Middle = () => {
  return (
    <div>
      <HeadInfo />
      <div style={{ marginTop: "2rem" }}></div>
      <PostSide />
    </div>
  );
};

export default Middle;
