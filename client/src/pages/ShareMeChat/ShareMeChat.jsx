import { Typography } from "@mui/material";
import Logo from "../../img/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";

const ShareMeChat = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <img src={Logo} alt="ShareMe" onClick={() => navigate("/chatsApp")} />
      <Typography style={{ paddingLeft: "1rem" }}>
        <b>ShareMeChat</b>
      </Typography>
    </div>
  );
};

export default ShareMeChat;
