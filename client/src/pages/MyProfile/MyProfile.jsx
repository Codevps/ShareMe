import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/user";
import RightSide from "../RightSide/RightSide";
import Left from "./components/Left/Left";
import Middle from "./components/Middle/Middle";
import "./styles.css";
const MyProfile = () => {
  return (
    <div className="MyProfile">
      <Left />
      <Middle />
      <RightSide />
    </div>
  );
};

export default MyProfile;
