import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Logo from "../../img/logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatFace = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div
      style={{
        justifyContent: "center",
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
        <Typography style={{ paddingLeft: "1rem", marginTop: "2rem" }}>
          <b style={{ fontSize: "2rem" }}>Chats</b>
        </Typography>
        <Typography
          variant="body1"
          style={{
            paddingLeft: "1rem",
            marginTop: "2rem",
            fontSize: "1.5rem",
            color: "grey",
          }}
        >
          Conversations
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <CardMedia
            image={user?.result?.profilePhoto}
            style={{
              height: "0.5rem",
              width: "0.5rem",
              borderRadius: "50%",
              margin: "auto",
              marginRight: "1rem",
              marginLeft: "1.5rem",
              padding: "1.5rem",
            }}
          />
          <CardContent style={{ padding: "0.2rem" }}>
            <Typography variant="body1">
              <b>{user?.result?.name}</b>
            </Typography>
            <Typography variant="body2">{user?.result?.profession}</Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ChatFace;
