import { Grid } from "@mui/material";
import React from "react";
import ChatFace from "./ChatFace";
import MessageFace from "./MessageFace.jsx";

const ShareMeChat = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Grid style={{ zIndex: "1300" }} item xs={5} sm={4} md={3.5} lg={2.5}>
        <ChatFace />
      </Grid>

      <Grid
        item
        style={{ zIndex: "1300", marginLeft: "1rem" }}
        xs={6}
        sm={7}
        md={8}
        lg={9}
      >
        <MessageFace />
      </Grid>
    </Grid>
  );
};
export default ShareMeChat;
