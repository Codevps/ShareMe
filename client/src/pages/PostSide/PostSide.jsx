import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../../actions/user";
import Posts from "../Posts/Posts";
import Share from "./Share";
import "./styles.css";
const PostSide = ({}) => {
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
