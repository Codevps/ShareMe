import { Card, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/logo.png";
import ChatCard from "./ChatCard.jsx";

const ChatFace = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div
      style={{
        justifyContent: "center",
        width: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          zIndex: "1300",
        }}
      >
        <img src={Logo} alt="ShareMe" onClick={() => navigate("/chatsApp")} />
        <Typography style={{ paddingLeft: "1rem" }}>
          <b>ShareMeChat</b>
        </Typography>
      </div>
      <Card style={{ height: "90vh", marginTop: "1rem", zIndex: "4300" }}>
        <Typography
          style={{
            paddingLeft: "1rem",
            marginTop: "1.5rem",
            paddingBottom: "1.1rem",
            borderBottom: "1px solid grey",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <b style={{ fontSize: "2rem" }}>Chats</b>
        </Typography>
        {/* <Typography
          variant="body1"
          style={{
            paddingLeft: "1rem",
            marginTop: "1rem",
            fontSize: "1.5rem",
            color: "grey",
          }}
        >
          Conversations
        </Typography> */}
        <ChatCard />
      </Card>
    </div>
  );
};

export default ChatFace;
