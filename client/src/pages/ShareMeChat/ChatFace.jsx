import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChats } from "../../actions/chats";
import Logo from "../../img/logo.png";
import LogoSearch from "../LogoSearch/LogoSearch";
import ChatCard from "./ChatCard.jsx";

const ChatFace = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { chats } = useSelector((state) => state.chats);

  useEffect(() => {
    dispatch(getChats(user?._id));
  }, [user]);
  return (
    <div
      style={{
        justifyContent: "center",
        width: "auto",
      }}
    >
      <div>
        <LogoSearch />
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
        {chats.map((chat) => (
          <ChatCard currentUser={user} data={chat} />
        ))}
      </Card>
    </div>
  );
};

export default ChatFace;
