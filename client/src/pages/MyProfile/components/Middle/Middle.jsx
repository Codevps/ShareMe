import React from "react";
import PostSide from "../../../PostSide/PostSide";
import HeadInfo from "./HeadInfo";

const Middle = ({}) => {
  return (
    <div>
      <HeadInfo />
      <div style={{ marginTop: "2rem" }}></div>
      <PostSide />
    </div>
  );
};

export default Middle;
