import React from "react";
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
