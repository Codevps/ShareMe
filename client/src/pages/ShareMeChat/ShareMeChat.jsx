import { Grid, Typography } from "@mui/material";
import Logo from "../../img/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import ChatFace from "./ChatFace";
import MessageFace from "./MessageFace.jsx";

const ShareMeChat = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={3}
      style={{
        height: "100vh",
      }}
    >
      <Grid item>
        <ChatFace />
      </Grid>
      <Grid item style={{ zIndex: "1300" }}>
        <MessageFace />
      </Grid>
    </Grid>
  );
};
export default ShareMeChat;
